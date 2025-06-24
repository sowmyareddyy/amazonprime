import React from "react";
import Navbar from "./Navbar";

const Layout = ({ selectedProfile, onLogout, children }) => {
  return (
    <>
      <Navbar selectedProfile={selectedProfile} onLogout={onLogout} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
