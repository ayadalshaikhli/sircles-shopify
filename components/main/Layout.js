import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="">
      <Nav />
      <main>{children}</main>w
      <Footer />
    </div>
  );
}
