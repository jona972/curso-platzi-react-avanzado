import React from "react";
import { GlobalStyles } from "./styles/GobalStyles";
import { Logo } from "./components/Logo";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { NavBar } from "./components/NavBar";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import Context from "./Context";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
      </Router>

      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <User path="/user" />
              <Favs path="/favs" />
            </Router>
          ) : (
            <Router>
              <NotRegisterUser path="/user" />
              <NotRegisterUser path="/favs" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  );
};

export default App;
