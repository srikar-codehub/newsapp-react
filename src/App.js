import "./App.css";
import Navbar from "./components/Navbar";

import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={3}
                  country="in"
                  onClick={console.log("general")}
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/buisness"
              element={
                <News
                  key="buisness"
                  pageSize={3}
                  country="in"
                  onClick={console.log("buisness")}
                  category="buisness"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={3}
                  country="in"
                  onClick={console.log("entertainment")}
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={3}
                  country="in"
                  onClick={console.log("health")}
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={3}
                  country="in"
                  onClick={console.log("science")}
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={3}
                  country="in"
                  onClick={console.log("sports")}
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={3}
                  country="in"
                  onClick={console.log("technology")}
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
