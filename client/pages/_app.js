import Head from "next/head";
import React, { useEffect, useState, createContext } from "react";
import { Provider } from "react-redux";
import AllToaster from "../src/components/AllToaser";
import PreLoader from "../src/layouts/PreLoader";
import ScrollTop from "../src/layouts/ScrollTop";
import store from "../src/redux/store";
import "../style/main.css";
import { BrowserRouter as Router } from "react-router-dom";
import "../public/css/team.scss";

let UserContext = createContext();
function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  const [user, setUser] = useState();
  useEffect(() => {
    setTimeout(() => {
      store && setPreloader(false);
    }, 1000);

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.WOW = require("wowjs");
      }
      new WOW.WOW().init();
    }, 2000);
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Provider store={store}>
        <Head>
          <title>Hattyhood</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="site.webmanifest" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/img/logo/H-logo.svg"
          />
        </Head>
        {preloader ? <PreLoader /> : <ScrollTop />}
        <AllToaster />
        <Component {...pageProps} />
      </Provider>
    </UserContext.Provider>
  );
}

export default MyApp;
export { UserContext };
