import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { SubmiButton } from "../components/SubmitButton";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <h1>User</h1>
      <SubmiButton onClick={removeAuth}>Cerrar sesion</SubmiButton>
    </Fragment>
  );
};
