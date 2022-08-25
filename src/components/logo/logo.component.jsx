import React from "react";
import { CustomLogo } from "./logo.style";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <CustomLogo />
      </Link>
    </div>
  );
};

export default Logo;
