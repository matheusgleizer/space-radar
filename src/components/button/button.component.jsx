import React, { Fragment } from "react";
import { CustomButton } from "./button.style";

const Button = ({name}) => {
  return (
    <Fragment>
      <CustomButton>{name}</CustomButton>
    </Fragment>
  );
};

export default Button;
