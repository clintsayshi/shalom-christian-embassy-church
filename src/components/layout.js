import React from "react";
import Footer from "./footer";
import Header from "./header";

import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col m-0 p-0">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
