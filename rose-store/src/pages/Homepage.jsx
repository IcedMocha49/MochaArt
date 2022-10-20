import React from 'react';
import Bulletin from '../components/Bulletin';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Banner from '../components/Banner';
import InfoBar from '../components/InfoBar';
import SubFooter from '../components/SubFooter';
import PreFooter from '../components/PreFooter';
import Trending from '../components/Trending';

const Homepage = () => {
  return (
    <div className ="container">
      <Navbar/>
      <Bulletin/>
      <Banner/>
      <InfoBar/>
      <Categories/>
      <Trending/>
      <Products/>
      <Newsletter/>
      <PreFooter/>
      <Footer/>
      <SubFooter/>
    </div>
  );
};

export default Homepage;
