import styled from 'styled-components';
import {SearchOutlined} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left: 0;
  opacity: 0;
  background-color: rgba(0,0,0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  height: 350px;
  display: flex;
  margin: 5px;
  min-width: 280px;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Wrapper}{
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
  max-width: 260px;
  z-index: 2;
  object-fit: contain;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: white;
  transition: all 0.5s ease;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Wrapper>
            <Icon>
              <Link to= {`/product/${item._id}`}>
                <SearchOutlined/>
                </Link>
            </Icon>
            {/*Future update
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon> */}
        </Wrapper>
    </Container>
  );
};

export default Product;