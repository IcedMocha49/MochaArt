import styled from 'styled-components';
import Bulletin from '../components/Bulletin';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import SubFooter from '../components/SubFooter';
import PreFooter from '../components/PreFooter';
import {Add, Remove} from "@material-ui/icons";
import { mobile } from '../responsiveDesign';
import {useLocation} from "react-router-dom";
import { generalRequest } from '../requests';
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import { addProduct } from "../reduxActions/cartSlice";

const Container = styled.div`
`;
const ProductContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding: "10px"})}
  
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const ColorContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({width: "100%"})}
  
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column"})}

`;
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  ${mobile({height: "40vh"})}
  
`;
const Title = styled.h1`
  font-weight: 500;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-size: 40px;  
  font-weight: 100;
`;
const ColorFilter = styled.div`
  display: flex; 
  align-items: center;
`;
const ColorTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const ColorItem = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 10px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${props=>props.color};
  border-style: solid;
  border-color: #192231;
  &:hover{
    border-color: green;
  }
`;
const QuantityContainer = styled.div`
  width: 50%;
  display: flex; 
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  ${mobile({width: "100%"})}
`;
const AmountContainer = styled.div`
  display: flex; 
  font-weight: 700;
  align-items: center;
`;
const BuyWishContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid #192231;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid #192231;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  background-color: transparent;
  font-weight: 500;
  &:hover{
    background-color: #98878F;
  }
`;
const WishlistAdd = styled.span`
  width: 30px;
  height: 10px;
  text-decoration: underline;
  margin: 0px 0px;
`;

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
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

  //function to handle quantity increase and decrease 
  const handleQuantity = (type) =>{
    if(type === "decrease"){
      quantity > 1 && setQuantity(quantity-1);
    } else {
      setQuantity(quantity+1);
    }
  };

  //updates cart
  const handleClick = ()=>{
    dispatch(
    addProduct({...product, quantity, color}));
  };

  return (
    <Container>
        <Navbar/>
        <Bulletin/>
        <Wrapper>
            <ImageContainer>
                <Image src = {product.img}/>
            </ImageContainer>
            <ProductContainer>
                <Title>{product.title}</Title>
                <Description>{product.desc}</Description>
                <Price>${product.price}</Price>
                <ColorContainer>
                  <ColorFilter>
                      <ColorTitle>Color: </ColorTitle>
                        {product.color?.map((c) => (
                        <ColorItem color={c} key={c} onClick={() => setColor(c)} />
                        ))}  
                  </ColorFilter>
                </ColorContainer>
                <QuantityContainer>
                  <AmountContainer>
                    <Remove onClick = {()=> handleQuantity("decrease")}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick = {()=> handleQuantity("increase")}/>
                  </AmountContainer>
                </QuantityContainer>
                <BuyWishContainer>
                  <Button onClick={handleClick}>ADD TO CART</Button>  
                </BuyWishContainer>
                <WishlistAdd>Add to Wishlist</WishlistAdd>
            </ProductContainer>
        </Wrapper>
        <Newsletter/>
        <PreFooter/>
        <Footer/>
        <SubFooter/>
    </Container>
  );
};

export default Product;