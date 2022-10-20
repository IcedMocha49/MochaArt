import styled from "styled-components";
import ItemCategories from "./ItemCategories";
import {popularCategories} from "../data";
import {mobile} from "../responsiveDesign";

const Container = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "0px", flexDirection: "column"})}
`;

const Categories = () => {

  return (<Container>
    {popularCategories.map((item)=>(
      <ItemCategories item={item} key = {item.id}/>
    ))}
  
    </Container>
  );
};

export default Categories;