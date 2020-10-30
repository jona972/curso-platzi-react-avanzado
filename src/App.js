import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyles } from "./GobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <ListOfCategories />
    </div>
  );
};

export default App;
