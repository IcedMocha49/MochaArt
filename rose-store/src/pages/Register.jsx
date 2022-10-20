import styled from 'styled-components';
import { mobile } from '../responsiveDesign';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(255, 255, 255, 0.5),
  rgba(255, 255, 255, 0.5)),
  url("https://images.unsplash.com/photo-1591870101203-9862f6cf75f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80") 
  center;
  background-size: cover;
  ${mobile({width: "100%"})}
`;

const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "100%"})}
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
  color: #985E6D;
`;
const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin: 20px 10px 0px 0px;
  min-width: 40%;
`;

const Button = styled.button`
  width: 50%;
  text-align: center;
  text-decoration: none;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  font-size: 16px;
  background-color: #985E6D;
  color: white;
`;


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE NEW ACCOUNT</Title>
            <Form>
                <Input placeholder="FIRST NAME"/>
                <Input placeholder="LAST NAME"/>
                <Input placeholder="EMAIL"/>
                <Input placeholder="USERNAME"/>
                <Input placeholder="PASSWORD"/>
                <Input placeholder="CONFIRM PASSWORD"/>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  );
};

export default Register;