import styled from 'styled-components';
import {Facebook, Instagram, Twitter} from "@material-ui/icons";
import { mobile } from '../responsiveDesign';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #192231;
  ${mobile({flexDirection: "column"})}
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  
`;
const Description= styled.p`
  margin: 20px 20px;
  color: white;
  ${mobile({display: "none"})}
`;
const IconContainer= styled.div`
  display: flex;
  padding: 10px;
`;
const Icon= styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const SubFooter = () => {
    return (
      <Container>
          <Center>
           <Description>CONNECT WITH US</Description>
             <IconContainer>
                 <Icon color = "3b5998">
                     <Facebook/>
                 </Icon>
                 <Icon color = "E1306C">
                     <Instagram/>
                 </Icon>
                 <Icon color= "00aced">
                     <Twitter/>
                 </Icon>
             </IconContainer>
         </Center>
      </Container>
    );
  };
  
  export default SubFooter;