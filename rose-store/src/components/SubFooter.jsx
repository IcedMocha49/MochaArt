import styled from 'styled-components';
import { mobile } from '../responsiveDesign';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c7c7c7;
  ${mobile({flexDirection: "column"})}
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
`;
const Description= styled.p`
  margin: 10px 0px;
  ${mobile({fontSize: "14px", color: "black"})}
`;

const SubFooter = () => {
    return (
      <Container>
         <Center>
            <Description>&copy; 2022 Website Design By Gabriela Brito</Description>
          </Center>
      </Container>
    );
  };
  
  export default SubFooter;