const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");


//register user
router.post("/register", async (req, res)=>{
    //creates model object to be sent to database
    const registerNewUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(), //used CryptoJS to hash passwords
        email: req.body.email,
    });
    try{
        //uses the save method to save registeredUser to database
        const registeredUser = await registerNewUser.save();
        res.status(201).json(registeredUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//user login
router.post("/login", async(req, res)=>{
    try {
        //finds user in db by username 
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong Credentials");//condition checks if there is a user

        const decryptedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);//decrypts password

        const Password = decryptedPassword.toString(CryptoJS.enc.Utf8);//converts decrypted password into string

        Password !==req.body.password && res.status(401).json("Wrong Credentials");//condition checks if the password is correct
        //json web token
        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn: "1d"}
        );
        //hides password and passes only other info
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    }
    catch (err){
        res.status(500).json(err);
    }
});

module.exports = router
