import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/stuff">Stuff</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="content">
           
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
