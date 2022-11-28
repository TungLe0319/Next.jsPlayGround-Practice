import React from "react";
import Footer from "./Footer.js";

import NavBar from "./NavBar.js";


const Layout = ({ children }) => {
  return (
    <div className="content">
<NavBar/>
      {children} 
<Footer/>
    </div>
  );
};

export default Layout;
