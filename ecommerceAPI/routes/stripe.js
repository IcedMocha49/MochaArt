const router = require('express').Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

//endpoint
router.post('/payment', (req, res)=>{
    stripe.charges.create({//creates a charge
        source: req.body.tokenId, 
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    });
});

module.exports = router;