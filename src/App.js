import "./App.css";
import Navbar from "./components/Navbar";

import React, { Component } from "react";

import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noArticles: 3,
      country: "in",
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar noArticles={this.state.noArticles} />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.state.noArticles}
                  country={this.state.country}
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
                  pageSize={this.state.noArticles}
                  country={this.state.country}
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
                  pageSize={this.state.noArticles}
                  country={this.state.country}
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
                  pageSize={this.state.noArticles}
                  country={this.state.country}
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
                  pageSize={this.state.noArticles}
                  country={this.state.country}
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
                  pageSize={this.state.noArticles}
                  country={this.state.country}
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
                  pageSize={this.state.noArticles}
                  country={this.state.country}
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
