import React from "react";
import { HeaderAppBar, HeaderLogo } from "./Header.style";
import { Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar>
        <HeaderLogo src="/img/logos/logo.svg" alt="e-diaristas" />
      </Toolbar>
    </HeaderAppBar>
  );
};
