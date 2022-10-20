const User = require("../models/User");
const router = require("express").Router();
const {verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");

//endpoints

//update user
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    //checks password 
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }
    try{
        //finds user by id and updates
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, 
            {new: true});
        res.status(200).json(updatedUser);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//delete user
router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        //finds user by id and deletes
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user deleted succesfully");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get user by id, admin access only
router.get("/find/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        //finds user by id
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;//admin can view all info except password
        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get all users, admin access only 
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    //const query = req.query.new
    try{
        //finds all users
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;


