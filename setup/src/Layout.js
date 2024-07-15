import React from "react";
import { Outlet, } from "react-router-dom";

// Import your pages here
import Header from "./Pages/Header";
import Footer from "./Pages/footer";


const Layout = () => {
  return (
    <>
    
      {/* Add your Header and Footer components here */}

      <Header/>

      <Outlet />  

      {/*This outlet Work as a body in website it will all pages and other content  */}

      <Footer/>

      {/* This will Show Header and footer into all pages */}

 



    </>
  )
};

export default Layout;