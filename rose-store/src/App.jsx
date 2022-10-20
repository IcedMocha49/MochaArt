import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product"
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes,
  Route, Navigate,
} from "react-router-dom";
import {useSelector} from "react-redux";

const App = () =>{
  const user = useSelector((state)=>state.user.currentUser);
  return(
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage/>} />
      <Route path="/products" element={<ProductList/>} /> 
      <Route path="/products/:category" element={<ProductList/>} /> 
      <Route path="/product/:id" element={<Product/>} /> 
      <Route path="/cart" element={<Cart/>} /> 
      <Route path="/signin"  element = {user ? <Navigate to="/" /> : <SignIn />}
      /> 
      <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/> 
      </Routes>
    </BrowserRouter>
  
  );
};

export default App;
