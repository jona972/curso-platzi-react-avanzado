import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegiterMutation";
import { LoginMutation } from "../container/LoginMutation";

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <Fragment>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };

            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg = error && "El usuario ya existe, o hay algun error";

          return (
            <UserForm
              error={errorMsg}
              disabled={loading}
              onSubmit={onSubmit}
              title="Registrarse"
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };

            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg =
            error && "La clave no es correcta o el usuario no existe";

          return (
            <UserForm
              error={errorMsg}
              disabled={loading}
              onSubmit={onSubmit}
              title="Iniciar Sesion"
            />
          );
        }}
      </LoginMutation>
    </Fragment>
  );
};
