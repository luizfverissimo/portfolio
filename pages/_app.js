import { useEffect } from "react";
import '../styles/globals.scss';
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 1000,
      easing: "ease",
      once: true,
      throttleDelay: 500,
    })
  }, [])

  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
