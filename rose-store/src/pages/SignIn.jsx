import styled from 'styled-components';
import React from 'react';
import {mobile} from "../responsiveDesign";
import {  useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../reduxActions/userAPICalls";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("https://images.unsplash.com/photo-1588920592494-8483d3fa89e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80") 
  center;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 400;
  color: #985E6D;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin: 10px 0px;
  width: 60%;
`;

const Button = styled.button`
  width: 50%;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: #985E6D;
  color: white;
  padding: 10px 20px;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  font-size: 20px;
  margin-bottom: 10px;
  &:disabled {
    cursor: not-allowed;
  }
`;

const BottomLinks = styled.div``;

const Error = styled.span`
  color: red;
`;

const linkStyle = {  
  textDecoration: "none",
  color: 'black'
};


const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, error} = useSelector((state)=> state.user);
  const dispatch = useDispatch();
  
  const handleClick = (e)=>{
    e.preventDefault();
    login(dispatch, {username, password});
  };

  return (
   <Container>
     <Wrapper>
        <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="USERNAME" onChange={(e)=> setUsername(e.target.value)}/>
            <Input placeholder="PASSWORD" type = "password" onChange={(e)=> setPassword(e.target.value)}/>
            <Button onClick = {handleClick} disabled={isFetching}>SIGN IN</Button>
              {error && <Error>Wrong Credentials</Error>}
            <BottomLinks>
              {/*<Link style={linkStyle}>RESET PASSWORD</Link> future update*/}
              <Link to="/register" style={linkStyle}>CREATE NEW ACCOUNT</Link>
            </BottomLinks>
          </Form>
      </Wrapper>
   </Container>
  );
};

export default SignIn;