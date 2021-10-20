import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";

import "./App.css";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="">Extra</Link>
      <h1>Detail</h1>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hatspage" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
