import styled from 'styled-components';
import { mobile } from '../responsiveDesign';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  ${mobile({flexDirection: "column"})}
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Description= styled.p`
  margin: 20px 20px;
  color: black;
  font-size: 30px;
  font-weight: bold;
  ${mobile({fontSize: "26px", paddingTop: "10px"})}
`;


const Trending = () => {
    return (
      <Container>
          <Center>
           <Description>FEATURED PRODUCTS</Description>
         </Center>
      </Container>  
    );
  };
  
  export default Trending;