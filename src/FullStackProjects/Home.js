import React from "react";
import HomeScreen from "./HomeScreen/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchScreen from "./SearchScreen/SearchScreen";

function Home() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/search">
          <SearchScreen />
        </Route>
      </Router>
    </div>
  );
}

export default Home;
