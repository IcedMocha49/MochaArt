const Product = require("../models/Product");
const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");


//create product, only admin can create
router.post("/", verifyTokenAndAdmin, async (req, res)=>{
    const createdProduct = new Product(req.body);

    try{
        const newProduct = await createdProduct.save();
        res.status(200).json(newProduct);
    }catch(err){
        res.status(500).json(err);
    }
});

//update product, admin access only
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        //finds product by id and updates
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//delete product, only admin can delete
router.delete("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("product deleted succesfully");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get product 
router.get("/find/:id", async (req, res)=>{
    try{
        //finds product by id
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json(err);
    }
});


//get all products 
router.get("/", async (req, res)=>{
    //fetch products by createdAt date and by category
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(1)
        }else if(qCategory){
            products = await Product.find({categories: {
                $in: [qCategory],
            },
        });
        }else{
            //fetch all products in db
            products = await Product.find();
        }
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;


