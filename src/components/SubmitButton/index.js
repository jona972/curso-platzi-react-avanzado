import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmiButton = ({ children, disabled, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

SubmiButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};
