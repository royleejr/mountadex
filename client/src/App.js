import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Mountain from "./pages/Mountain/Mountain";

//styling
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mountain/:mountainName" component={Mountain} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
