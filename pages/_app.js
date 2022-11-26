import React from "react"
import Layout from "../comps/Layout.js"
import '../styles/globals.css'
import Script from "next/script";
function MyApp({ Component, pageProps }) {

 return (
   <Layout>


     <Component {...pageProps} />
   </Layout>
 );
  
}

export default MyApp
