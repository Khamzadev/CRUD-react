import React from "react";
import { AppBar, Toolbar, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin: 0 10px;
  color:inherit;
  text-decoration:none;
`;

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">BOOKS CRUD APP</Tabs>
        <Tabs to="/all">ALL BOOKS</Tabs>
        <Tabs to="/add">ADD BOOK</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
