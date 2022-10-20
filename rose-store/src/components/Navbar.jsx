import React from 'react';
import styled from 'styled-components';
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {mobile, lgMobile, tablet, laptop, desktop} from "../responsiveDesign";
import {useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {useEffect, useState} from "react";
import { generalRequest } from '../requests';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "55px"})}
    ${lgMobile({height: "55px"})}
    ${tablet({height: "60px"})}
`;

const SearchContainer = styled.div`
    width: 100%;
    border: .5px solid gray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${tablet({width: "90%"})}
    ${laptop({width: "100%"})}
`;

const Wrapper = styled.div`
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
    display: flex;
    ${mobile({padding: "12px 0px 0px 0px"})}
    ${lgMobile({padding: "12px 0px 0px 0px"})}
    ${laptop({padding: "10px 20px"})}
    ${desktop({padding: "10px 30px"})}
`;

const Leftside = styled.div`
   flex: 1;
   display: flex;
   align-items: center; 
   justify-content: flex-start;
`;

const Center = styled.div`
    flex: 1;
    ${mobile({display: "none"})}
    ${lgMobile({display: "none"})}
    ${tablet({display: "flex"})}
`;

const Rightside = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ justifyContent: "flex-end", padding: "10px"})}
    ${lgMobile({padding: "10px", justifyContent: "flex-end"})}
    ${tablet({padding: "10px", justifyContent: "flex-end"})}
`;

const Input = styled.input`
    border: none;
    width: 100%;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px",  marginRight: "5px", marginBottom: "10px"})}
    ${lgMobile({fontSize: "25px",  marginRight: "5px", marginBottom: "10px"})}
    ${tablet({fontSize: "30px",  marginRight: "5px", marginBottom: "5px"})}
    ${desktop({fontSize: "30px", marginBottom: "2px"})}
`;

const Item = styled.div`
    font-size: 16px;
    margin-left: 25px;
    cursor: pointer;
    ${mobile({fontSize: "12px", marginLeft: "5px", marginRight: "5px"})}
    ${lgMobile({fontSize: "14px", marginLeft: "10px", marginRight: "5px"})}
    ${tablet({fontSize: "14px", marginLeft: "10px", marginRight: "5px"})}
    ${laptop({fontSize: "15px", marginLeft: "12px"})}
    ${desktop({fontSize: "16px", marginLeft: "25px"})}
`;

const NavLink = styled.ul`
    text-decoration: none;
    display: inline-block;
    padding: 0px 15px;
`;

const linkStyle = {
    textDecoration: "none",
    color: 'black'
  };

const Navbar = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [query, setQuery] = useState("");
    const [product, setProduct] = useState({});

    const quantityCart = useSelector(state=>state.cart.quantity);

    useEffect(() =>{
        const getProduct = async ()=>{
          try{
            const res = await generalRequest.get("/products/find/" + id)
            setProduct(res.data);
          }
          catch{}
        };
        getProduct();
      }, [id]);
    
    return (
        <Container>
            <Wrapper>
                <Leftside>
                    <NavLink>
                    <Link to="/" style={linkStyle}>
                    <Logo>Mocha.Art</Logo>
                    </Link>
                    </NavLink>
                </Leftside>
                <Center>
                    <SearchContainer>
                        <Input className = "Search" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/> 
                        <Search style = {{color: "gray", fontSize:22}}/>
                    </SearchContainer>
                </Center>
                <Rightside>
                    <Link to="/register" style={linkStyle}>
                    <Item>Create Account</Item>
                    </Link>
                    <Link to="/signin" style={linkStyle}>
                    <Item>Sign In</Item>
                    </Link>
                    <Link to="/cart">
                    <Item>
                    <Badge badgeContent={quantityCart} color="secondary">
                        <ShoppingCartOutlined/>
                    </Badge>
                    </Item>
                    </Link>
                </Rightside>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
