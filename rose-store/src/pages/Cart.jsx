import styled from 'styled-components';
import Bulletin from '../components/Bulletin';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SubFooter from '../components/SubFooter';
import PreFooter from '../components/PreFooter';
import {Add, Remove} from "@material-ui/icons";
import { mobile, lgMobile, laptop } from '../responsiveDesign';
import { useSelector } from "react-redux";
import {useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { generalRequest } from '../requests';
import {Link} from "react-router-dom";
import { removeProduct, incrementQuantity, decrementQuantity } from "../reduxActions/cartSlice";
import {useDispatch} from "react-redux";

const Container = styled.div`
`;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
  ${lgMobile({flexDirection: "column"})}
  ${laptop({display: "flex", flexDirection: "row"})}
`;
const Title = styled.h1`
  text-align: center;
  font-weight: 300;
`;
const Info = styled.div`
  flex: 3;
`;
const TopButton = styled.button`
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  border-color: black;
  font-size: 15px;
  border: ${props=>props.type === "filled" && "none"};
  background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
  color: ${props=>props.type === "filled" && "white"};
  ${mobile({display: "none"})}
`;
const Product = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column", padding: "10px"})}
  ${lgMobile({flexDirection: "column", padding: "10px"})}
  ${laptop({flexDirection: "row", padding: "10px"})}
`
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
  ${mobile({flexDirection: "column"})}
  ${lgMobile({flexDirection: "column"})}
  ${laptop({display: "flex", flex: "2", flexDirection: "row"})}
`;
const Image = styled.img`
  width: 200px;
  ${mobile({width: "100%"})}
  ${lgMobile({width: "100%"})}
  ${laptop({width: "200px", height: "200px"})}
`;
const Details = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
const ProductId = styled.span`
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=> props.color};
  border-style: solid;
  border-color: #192231;
`;
const ProductAmount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #192231;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const ProductName = styled.span`
`;
const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
  flex: 1;
  justify-content: center;
`;
const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 400;
  ${mobile({marginBottom: "20px"})}
  ${lgMobile({marginBottom: "20px"})}
  ${laptop({marginBottom: "0px"})}
`;
const ProductAmountContainer = styled.span`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-color: #192231;
`;
const Hr = styled.div`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const OrderSummary = styled.div`
  flex: 1;
  padding: 20px;
  height: 50vh;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  ${mobile({marginTop: "10px"})}
  ${lgMobile({marginTop: "10px"})}
`;
const OrderTitle = styled.h1`
  font-weight: 200;
`;
const OrderItemText = styled.span`
`;
const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  font-weight: ${props=>props.type === "total" && "500"};
  font-size: ${props=>props.type === "total" && "24px"};
`;
const OrderItemPrice = styled.span`
`;
const OrderSearchContainer = styled.div`
  display: flex;
  width: 50%;
`;
const Input = styled.input`
  width: 100%;
`;
const ProductDescription = styled.span``;
const OrderButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  font-size: 18px;
  color: white;
  background-color: black;
`;
const OrderCodeButton=styled.button`
  width: 50%;
  padding: 3px;
  text-align: center;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  color: white;
  background-color: black;
`;

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  

  useEffect(() =>{
    const getProduct = async ()=>{
      try{
        const res = await generalRequest.get("/products/find/" + id)
        setProduct(res.data);
      }catch{}
    };
    getProduct();
  }, [id]);
 
   const handleQuantity = (type) =>{
    if(type === "decrease"){
      quantity > 1 && setQuantity(quantity-1);
    }else{
      setQuantity(quantity+1);
    }
  };

  return (
    <Container>
        <Navbar/>
        <Bulletin/>
        <Wrapper>
        <Title>MY SHOPPING CART</Title>
            <Top>
                <Link to = '/products/flower' style={linkStyle}>
                <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>  
            </Top>
            <Bottom>
                <Info>
                {cart.products.map((product) => (
                    <Product>
                      <ProductDetail>
                        <Image src={product.img}/>
                        <Details>
                          <ProductName><b>Product: </b>{product.title}</ProductName>
                          <ProductDescription><b>Details: </b>{product.desc}</ProductDescription>
                          <ProductId><b>Item Id: </b> {product._id}</ProductId>
                          <ProductPrice> <b>Price: </b>${product.price * product.quantity}.00</ProductPrice>
                          Color:
                          <ProductColor color={product.color}/>
                        </Details>
                        </ProductDetail>
                        <PriceDetail>
                        Quantity:
                          <ProductAmountContainer>
                            <Add onClick = {()=> dispatch(incrementQuantity(product._id))}/>
                            <ProductAmount>{product.quantity}</ProductAmount>
                            <Remove onClick = {()=> dispatch(decrementQuantity(product._id))}/>
                          </ProductAmountContainer>
                        </PriceDetail>
                        <button
                          className='cartItem__removeButton' 
                          onClick={() => dispatch(removeProduct(product._id))}>
                          Remove
                        </button>
                    </Product>
                     ))}
                    <Hr/>
                </Info>
                <OrderSummary>
                  <OrderTitle>Order Summary</OrderTitle>
                  <OrderItem>
                    <OrderItemText>Subtotal</OrderItemText>
                    <OrderItemPrice>$ {cart.total}.00</OrderItemPrice>
                  </OrderItem>
                  <OrderItem>
                    <OrderItemText>Estimated Shipping</OrderItemText>
                    <OrderItemPrice>$5.00</OrderItemPrice>
                  </OrderItem>
                  <OrderItem>
                    <OrderItemText>Shipping Discount</OrderItemText>
                    <OrderItemPrice>-$5.00</OrderItemPrice>
                  </OrderItem>
                  <OrderItem>
                    <OrderItemText>Add Code:</OrderItemText>
                    <OrderSearchContainer>
                        <Input placeholder="FLOWERS4U"/> 
                        <OrderCodeButton>Apply</OrderCodeButton>
                    </OrderSearchContainer>
                  </OrderItem>
                  <OrderItem type="total">
                    <OrderItemText>Total</OrderItemText>
                    <OrderItemPrice>$ {cart.total}.00</OrderItemPrice>
                  </OrderItem>
                  <OrderButton>CHECKOUT</OrderButton>
                </OrderSummary>
            </Bottom>
        </Wrapper>
      <PreFooter/>
      <Footer/>
      <SubFooter/>
    </Container>
  );
};

export default Cart;