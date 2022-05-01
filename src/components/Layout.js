import React from "react";
import Paper from "@mui/material/Paper";
import Menubar from "./Menubar";
import "../styles/layout.scss";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";
const styles = {
  marginLeft: "15%",
  marginRight: "15%",
  marginTop: "1%",
  margin: "1% 15%",
};
const styleMobile = {
  marginTop: "1%",
  marginBottom: "1%",
};
const Layout = ({ children }) => {
  const matches = useMediaQuery("(min-width:700px");

  return (
    <>
      {/* navbar */}
      <Menubar />
      {/* body content */}
      <Paper style={matches ? styles : styleMobile}>{children}</Paper>
    </>
  );
};

export default Layout;
