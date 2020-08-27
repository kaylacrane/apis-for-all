import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Cats from "./Cats";
import Quotes from "./Quotes";
// import Weather from "./Weather";
import Avatars from "./Avatars";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/apis/cats/">
          <Cats />
        </Route>
        <Route exact path="/apis/quotes/">
          <Quotes />
        </Route>
        <Route exact path="/apis/avatars/">
          <Avatars />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
