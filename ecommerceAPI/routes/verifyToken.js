const jwt = require("jsonwebtoken");

//middleware verifies json web token

const verifyToken = (req, res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
            if(err) res.status(403).json("Invalid Token!!");
            req.user = user;
            next();
        });
    }else{
        return res.status(401).json("Authentication Needed");
    }
};
//checks if user id is authenticated or if user is an admin
const verifyTokenAndAuthorization = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Unauthorized Access");
        }
    });
};
//checks if user is admin
const verifyTokenAndAdmin = (req, res, next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Unauthorized Access");
        }
    });
};

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};