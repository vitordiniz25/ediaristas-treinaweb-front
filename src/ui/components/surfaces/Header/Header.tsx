import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar, Container } from "@mui/material";

export const Header = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logos/logo.svg" alt="e-diaristas" />
      </Toolbar>
    </HeaderAppBar>
  );
};
