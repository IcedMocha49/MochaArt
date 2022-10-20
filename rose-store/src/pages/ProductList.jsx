import styled from "styled-components";
import Bulletin from "../components/Bulletin";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubFooter from '../components/SubFooter';
import PreFooter from '../components/PreFooter';
import {useLocation} from "react-router";
import { useState } from "react";
import { mobile } from "../responsiveDesign";

const Container = styled.div`
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OptionText = styled.span`
  margin-right: 20px;  
  font-size: 20px;
  font-weight: 600;  
  ${mobile({marginRight: "0px", fontSize: "16px"})}
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({width: "0px 20px" , display: "flex", flexDirection: "column"})}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({margin: "10px 0px"})}
`;

const Option = styled.option`
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
      }
    );
  };
 
  return (
    <Container>
        <Navbar/>
        <Bulletin/>
        <ProductsContainer>
            <Filter>
                <OptionText>Filter Products:</OptionText>
                <Select name = "color" onChange={handleFilters}>
                  <Option >
                    Color
                  </Option>
                  <Option>white</Option>
                  <Option>red</Option>
                  <Option>pink</Option>
                  <Option>blue</Option>
                  <Option>yellow</Option>
                  <Option>purple</Option>
                  <Option>orange</Option>
                </Select>
            </Filter>
            <Filter>
            <OptionText>Sort Products:</OptionText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="">Choose</Option>
              <Option value="lowest">Price (lowest-highest)</Option>
              <Option value="highest">Price (highest-lowest)</Option>
            </Select>
            </Filter>
        </ProductsContainer>
        <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter/>
      <PreFooter/>
      <Footer/>
      <SubFooter/>
    </Container>
  );
};

export default ProductList;