import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Mountain from "./pages/Mountain/Mountain";

//styling
import "./styles/app.scss";

class App extends React.Component {
  render() {
    console.log(this.hero);
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mountain/:mountainName" component={Mountain} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
