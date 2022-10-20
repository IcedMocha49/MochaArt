import styled from "styled-components";
import {mobile, tablet} from "../responsiveDesign";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    height: 30px;
    background-color: #192231;
    color: white;
    ${mobile({fontSize: "12px"})}
    ${tablet({fontSize: "16px"})}
`;

const Bulletin = () => {
  return (
    <Container>Take 10% Off Your Entire Order With Code FLOWERS4U</Container>
  );
};

export default Bulletin;