import styled from 'styled-components';
import {Room, Phone, MailOutline} from "@material-ui/icons";
import { mobile, lgMobile, tablet, laptop } from '../responsiveDesign';
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #c7c7c7;
  ${mobile({flexDirection: "column"})}
  ${lgMobile({flexDirection: "column"})}
  ${tablet({display: "flex", flexDirection: "row"})}
  ${laptop({display: "flex"})}
`;

const Title= styled.h3`
  margin-bottom: 20px;
  ${mobile({alignItems: "center", justifyContent: "center"})}
  ${lgMobile({alignItems: "center", justifyContent: "center"})}
  ${laptop({ alignItems: "center", justifyContent: "center"})}
`;

const Leftside = styled.div`
  flex:1;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
`;

const Description= styled.p`
  margin: 20px 0px;
`;

const Logo= styled.h1`
  font-weight: bold;
`;

const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({display: "none"})}
    ${lgMobile({display: "none"})}
    ${laptop({display: "grid", flex: "1"})}
`;

const Rightside = styled.div`
    flex:1;
    padding: 20px 0px 0px 100px;
    ${mobile({backgroundColor: "#494E6B", color: "white", padding: "10px 10px 10px 75px", alignItems: "center", justifyContent: "center"})}
    ${lgMobile({backgroundColor: "#494E6B", color: "white", padding: "10px 10px 10px 75px", alignItems: "center", justifyContent: "center"})}
    ${tablet({backgroundColor: "#c7c7c7", color: "black", padding: "10px 10px 10px 75px", alignItems: "center", justifyContent: "center"})}
    ${laptop({ padding: "20px 20px 0px 100px"})}
`;

const List = styled.ul`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
const Item = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Contact = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  
`;

const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


const Footer = () => {
  return (
    <Container>
        <Leftside>
            <Link to="/" style={linkStyle}>
              <Logo>Mocha.Art</Logo>
            </Link>
            <Description>With over 10 years of experience, Mocha.Art specializes in crepe paper flower art. 
              We offer a range of options from roses to peonies to orchids, etc.</Description>
        </Leftside>
        <Center>
          <Title>Resources & Links</Title>
          <List>
            <Item><Link to = '/' style={linkStyle}>Home </Link></Item>
            <Item>Accessibility</Item>
            <Item><Link to = '/products/flower' style={linkStyle}>Products </Link></Item>
            <Item>Privacy Policy</Item>
            <Item><Link to = '/register' style={linkStyle}>Create Account </Link></Item>
            <Item>Terms of Service</Item>
          </List>
        </Center>
        <Rightside>
          <Title>Contact Us</Title>
            <Contact>
              <Room style={{marginRight: "15px"}}/>1234 Street, City, IL 12345
            </Contact>
            <Contact>
              <Phone style={{marginRight: "15px"}}/>+1 (123) 456-7890
            </Contact>
            <Contact>
              <MailOutline style={{marginRight: "15px"}}/>contact@mochaart.dev
            </Contact>   
        </Rightside>
    </Container>
  );
};

export default Footer;