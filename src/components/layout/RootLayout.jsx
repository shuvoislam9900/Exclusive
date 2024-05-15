import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import NavBar from "../NavBar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <NavBar/>
      <Outlet />
    </>
  );
};

export default RootLayout;