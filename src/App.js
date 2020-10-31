import React, { useContext, Suspense } from "react";
import { GlobalStyles } from "./styles/GobalStyles";
import { Logo } from "./components/Logo";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Redirect, Router } from "@reach/router";
import { NavBar } from "./components/NavBar";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

const Favs = React.lazy(() => import("./pages/Favs"));

const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};

export default App;
