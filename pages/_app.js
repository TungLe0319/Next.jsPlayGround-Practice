import React, { useEffect } from "react";
import Layout from "../components/Layout.js";
import "../styles/globals.css";
import Script from "next/script";
import { store } from "../store.js";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
