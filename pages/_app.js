import React, { useEffect } from "react";
import Layout from "../components/Layout.js";
import "../styles/globals.css";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
