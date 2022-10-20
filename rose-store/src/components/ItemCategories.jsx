import styled from "styled-components";
import { mobile } from "../responsiveDesign";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 70vh;
  margin: 3px;
  flex: 1;
  position: relative;
  ${mobile({paddingTop: "5px"})}
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  font-size: 36px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: "38vh"})}
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 32px;
  border-color: black;
  font-size: 20px;
  font-weight: 600;
  background-color: white;
  color: black;
  background-color: transparent;
`;

const ItemCategories = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src = {item.img}/>
      <Wrapper>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Wrapper>
      </Link>
    </Container>
  );
};

export default ItemCategories;