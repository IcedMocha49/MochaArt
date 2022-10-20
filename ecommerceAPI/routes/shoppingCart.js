const Cart = require("../models/ShoppingCart");
const router = require("express").Router();
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");


//create new cart 
router.post("/", verifyToken, async (req, res)=>{
    const createdCart = new Cart(req.body);

    try{
        const newCart = await createdCart.save();
        res.status(200).json(newCart);
    }catch(err){
        res.status(500).json(err);
    }
})

//update cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        //finds cart by id and updates
        const updatedCart= await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//delete cart
router.delete("/:id", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        //finds cart by id and deletes
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("cart deleted successfully");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get user cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        //find cart associated with user id
        const cart = await Cart.findOne({userId: req.params.userId });
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get all carts, admin access only
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
