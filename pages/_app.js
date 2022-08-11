import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/main/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  const router = useRouter();
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
