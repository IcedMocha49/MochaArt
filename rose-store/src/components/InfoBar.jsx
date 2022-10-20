import styled from 'styled-components'
import {LocalShippingOutlined, VerifiedUserOutlined, CachedOutlined, LocalOffer} from "@material-ui/icons";
import {mobile, lgMobile, tablet, laptop, desktop} from "../responsiveDesign";

const BotContainer = styled.div`
    width: 100%;
    height: 26vh;
    display: grid;
    background-color: white;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding: 10px 0px 10px 0px;
    ${mobile({display: "none"})}
    ${lgMobile({display: "none"})}
    ${tablet({display: "grid", width: "100%"})}
`;
const BotWrapper1 = styled.div`
    padding: 20px 0;
    background-color: #192231;
    border-style: solid;
    border-color: #494E6B;
    ${tablet({padding: "10px 5px"})}
    ${laptop({padding: "10px 0px"})}
    ${desktop({padding: "20px 0px"})}
`;
const BotWrapper2 = styled.div`
    padding: 20px 0;
    background-color: #192231;
    border-style: solid;
    border-color: #494E6B;
    ${tablet({padding: "10px 0px"})}
    ${desktop({padding: "20px 0px"})}
`;
const BotWrapper3 = styled.div`
    padding: 20px 0;
    background-color: #192231;   
    border-style: solid;
    border-color: #494E6B;
    ${tablet({padding: "10px 0px"})}
    ${desktop({padding: "20px 0px"})}
`;
const BotWrapper4 = styled.div`
    padding: 20px 0;
    background-color: #192231;   
    border-style: solid;
    border-color: #494E6B;
    ${tablet({padding: "10px 5px"})}
    ${laptop({padding: "10px 0px"})}
    ${desktop({padding: "20px 0px"})} 
`;
const Icons = styled.div`
    transform: scale(1.8);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
    padding-bottom: 30px;
    color: #985E6D;
    ${tablet({transform: "scale(1.5)"})}
    ${laptop({transform: "scale(1.6)"})}
    ${desktop({transform: "scale(1.8)"})}
`;
const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #98878F;
    ${tablet({fontSize: "15px", textAlign: "center"})}
    ${desktop({fontSize: "18px", textAlign: "center"})}
`;

const InfoBar = () => {

return (
    <BotContainer>
        <BotWrapper1>
            <Icons>
                <LocalShippingOutlined/>
            </Icons>
            <Title>Free Shipping On Orders Over $49</Title>
        </BotWrapper1>
        <BotWrapper2>
            <Icons>
                <VerifiedUserOutlined/>
            </Icons>
            <Title>Secure Payments Guaranteed!</Title>
        </BotWrapper2>
        <BotWrapper3>
            <Icons>
                <CachedOutlined/>    
            </Icons>
            <Title>Easy Returns and Exchanges</Title>
        </BotWrapper3>
        <BotWrapper4>
            <Icons>
                <LocalOffer/>
            </Icons>
            <Title>Save Big with Weekly Deals!</Title>
        </BotWrapper4>
    </BotContainer>
);
};

export default InfoBar;