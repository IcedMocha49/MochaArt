import styled from 'styled-components'
import { sliderData } from '../data'
import {useState} from 'react'
import {mobile, lgMobile, tablet, laptop, desktop} from "../responsiveDesign";
import {
  Link
} from "react-router-dom";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons"

const Container = styled.div`
  height: 61vh;
  width: 100%;
  display: flex;
  background-image: linear-gradient(to right, #494E6B , #98878F);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  position: relative;
  overflow: hidden;
  ${mobile({height: "45vh", paddingBottom: "70px"})}
  ${lgMobile({height: "50vh", paddingBottom: "70px"})}
  ${tablet({height: "50vh", paddingBottom: "70px"})}
  ${laptop({height: "55vh", paddingBottom: "30px"})}
  ${desktop({height: "61vh", paddingBottom: "0px"})}
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;  
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slidePosition * -100}vw);
  ${mobile({flexDirection: "row", marginBottom: "20px"})}
  ${lgMobile({flexDirection: "row", marginBottom: "20px"})}
  ${tablet({flexDirection: "row", marginBottom: "20px"})}
  ${laptop({display: "flex", marginBottom: "10px"})}
  ${desktop({display: "flex", marginBottom: "0px"})}
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${props=> props.position === "left" && "10px"};
  right: ${props=> props.position === "right" && "10px"};
  opacity: .5;
  z-index: 2;
  ${mobile({width: "30px", height: "30px"})}
  ${lgMobile({width: "40px", height: "40px"})}
  ${tablet({width: "40px", height: "40px"})}
  ${laptop({width: "50px", height: "50px"})}
`;
const ImageContainer = styled.div`
  clip-path: circle(35% at 50% 50%);
  background-color: white;
  height: 100%;
  width: 100%;
  flex: 1;
  padding: 30px;
  top: 0;
  left: 0;
  ${mobile({display: "flex", flexDirection: "column", marginLeft: "20px", padding: "0px", height: "55%", width: "55%", marginBottom: "70px"})}
  ${lgMobile({display: "flex", flexDirection: "column", marginLeft: "20px", padding: "0px", height: "60%", width: "60%", marginBottom: "70px"})}
  ${tablet({display: "flex", flexDirection: "column", marginLeft: "10px", padding: "0px", height: "65%", width: "65%", marginBottom: "70px"})}
  ${laptop({flex: "1", padding: "30px", height: "100%", width: "100%", marginBottom: "10px"})}
  ${desktop({flex: "1", padding: "10px", height: "100%", width: "100%", marginBottom: "0px"})}
  `;
const Slide = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg}
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  position: relative;
  padding: 10px 0px;
`;
const SaleContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile({display: "flex", flexDirection: "column", padding: "20px", marginBottom: "70px"})}
  ${lgMobile({display: "flex", flexDirection: "column", padding: "20px", marginBottom: "70px", marginRight: "10px"})}
  ${tablet({display: "flex", flexDirection: "column", padding: "15px", marginBottom: "70px", marginRight: "20px"})}
  ${laptop({flex: "1", padding: "50px", marginBottom: "10px", marginRight: "10px"})}
  ${desktop({flex: "1", padding: "50px", marginBottom: "0px", marginRight: "0px"})}
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
  font-weight: 500;
  background-color: transparent;
  ${mobile({fontSize: "14px"})}
  ${tablet({fontSize: "18px"})}
  ${desktop({fontSize: "20px"})}
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile({fontSize: "26px"})}
  ${lgMobile({fontSize: "30px"})}
  ${tablet({fontSize: "38px"})}
  ${laptop({fontSize: "44px"})}
  ${desktop({fontSize: "70px"})}
`;
const Description = styled.p`
  margin: 50px 0px;
  letter-spacing: 3px;
  font-size: 20px;
  font-weight: 500;
  ${mobile({fontSize: "13px", fontWeight: "400", margin: "20px 0px"})}
  ${lgMobile({fontSize: "16px", fontWeight: "400", margin: "30px 0px"})}
  ${tablet({fontSize: "18px", fontWeight: "400", margin: "50px 0px"})}
  ${desktop({fontSize: "20px", fontWeight: "500", margin: "50px 0px"})}
`;

const Slider = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  
  const handleClick = (position) =>{
    if (position === "left"){
      setSlidePosition(slidePosition > 0 ? slidePosition - 1 : 2 );
    }
    else{
      setSlidePosition(slidePosition < 2 ? slidePosition + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow position="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slidePosition={slidePosition}>
        {sliderData.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <SaleContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link to={`/products/${item.cat}`}>
              <Button>SHOP NOW</Button>
              </Link>
            </SaleContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow position="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;