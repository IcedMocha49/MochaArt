import styled from 'styled-components';
import {mobile, lgMobile, tablet, laptop, desktop} from "../responsiveDesign";
import { useState } from 'react';
import db from '../firebase';
import firebase from 'firebase/compat/app';

const Container = styled.div`
  height: 30vh;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: #98878F;
  flex-direction: column;
`;
const EmailContainer = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: 32px;
  ${mobile({width: "50%", height: "50px"})}
  ${lgMobile({height: "50px"})}
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 10px;
  ${mobile({fontSize: "36px"})}
  ${lgMobile({fontSize: "40px"})}
  ${laptop({fontSize: "50px"})}
  ${desktop({fontSize: "70px"})}
`;
const Description = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 300;
  ${mobile({textAlign: "center", fontSize: "14px", fontWeight: "400"})}
  ${lgMobile({fontSize: "16px", fontWeight: "400"})}
  ${laptop({fontSize: "20px", fontWeight: "300"})}
  ${desktop({fontSize: "24px"})}
`;
const Input = styled.input`
  border: 2px solid black;
  border-radius: 32px;
  flex: 7;
  padding-left: 20px;
  ${mobile({height: "65%"})}
  ${lgMobile({height: "65%"})}
`;
const Button = styled.button`
  display: flex;
  width: 80%;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  border-color: black;
  background-color: #494E6B;
  color: white;
  font-size: 16px;
  font-weight: 500;
  ${mobile({width: "50%", fontSize: "13px"})}
  ${lgMobile({fontSize: "13px", fontWeight: "400"})}
  ${tablet({fontSize: "14px", fontWeight: "500"})}
  ${laptop({fontSize: "15px"})}
  ${desktop({fontSize: "16px"})}
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;
const Alert = styled.p`

`;

const Newsletter = () => {

  const [input, setInput] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const inputHandler = (e)=> {
    setInput(e.target.value);
  };

  const submitHandler = (e)=> {
    e.preventDefault();
    if(input){
      console.log(input);
      //add to firebase
      db.collection("emails").add ({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
      setSuccessMsg("Thank you for signing up");
      setTimeout(()=> {
        setSuccessMsg("");
      }, 8000)
    }
  };


  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Title>NEWSLETTER</Title>
        <Description>Sign up to receive updates from your favorite products</Description>
        <EmailContainer>
          <Input placeholder="Email Address " type = "email" onChange={inputHandler} value = {input}/>
        </EmailContainer>
        <Button>SUBSCRIBE</Button>
        </Form>
        <Alert>{successMsg}</Alert>
    </Container>
  );
};

export default Newsletter;