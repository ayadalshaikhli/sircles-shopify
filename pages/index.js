import ExtraProductList from "../components/extrafile/ExtraProductList";
import ProductList from "../components/productfile/ProductList";
import client, { getProductsInCollection } from "../lib/shopify";
import Head from "next/head";
import Script from "next/script";

export default function Home({ products }) {
  return (
    <>
      <div>
        <Head>
          <title>Sircles</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            httpEquiv="Content-Type"
            content="text/html; charset=ISO-8859-1"
          />
          <meta
            name="description"
            content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
          />
          <meta property="og:title" content="Sircles" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.buildnextshop.com" />
          <meta
            property="og:image"
            content="https://www.buildnextshop.com/share.png"
          />
          <meta
            property="og:description"
            content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Sircles" />
        </Head>
        <div className="">
          {/* <ProductList products={products} /> */}
          <ExtraProductList products={products} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: {
      products,
    },
  };
}
