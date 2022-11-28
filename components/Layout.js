import Head from "next/head.js";
import React from "react";
import Footer from "./Footer.js";

import NavBar from "./NavBar.js";

// const Layout = ({ children }) => {
//   return (
//     <div className="content">
// <NavBar/>
//       {children}
// <Footer/>
//     </div>
//   );
// };
// export default Layout;

export default function Layout({ title, children }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title> {title} </title>
        <link rel="icon" href="/favicon.ico" />{" "}
      </Head>

      <main className=" mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}
