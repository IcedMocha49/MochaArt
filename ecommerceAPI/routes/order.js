const Order = require("../models/Order");
const router = require("express").Router();
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");


//create order
router.post("/", verifyToken, async (req, res)=>{
    const createdOrder = new Order(req.body);

    try{
        const newOrder = await createdOrder.save();
        res.status(200).json(newOrder);
    }catch(err){
        res.status(500).json(err);
    }
});

//update order, only admin is allowed to update order
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        //finds order by id and updates
        const updatedOrder= await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//delete order, admin access only
router.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("order deleted successfully");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get user order 
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res)=>{
    try{
        //find orders associated with user id
        const userOrders = await Order.find({userId: req.params.userId });
        res.status(200).json(userOrders);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get all orders, admin access only
router.get("/", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;