import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Title, Error } from "./styles";
import { SubmiButton } from "../SubmitButton";

export const UserForm = ({ error, onSubmit, title, disabled }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input placeholder="Email" {...email} disabled={disabled} />
        <Input
          placeholder="Password"
          disabled={disabled}
          type="password"
          {...password}
        />
        <SubmiButton disabled={disabled}>{title}</SubmiButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};
