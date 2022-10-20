const express = require("express");
const cors = require('cors');
const app = express();
const dotenv = require ("dotenv");
const userRoute = require("./routes/user");
const authenticationRoute = require("./routes/authentication");
const productRoute = require("./routes/product");
const shoppingCartRoute = require("./routes/shoppingCart");
const orderRoute = require("./routes/order");
const mongoose = require("mongoose");



dotenv.config();
//connect mongo database
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("DB Connected"))
.catch((err) =>{
    console.log(err);
});

app.use(express.json());
app.use(cors());
//api endpoints
app.use("/api/authentication", authenticationRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", shoppingCartRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running");
});