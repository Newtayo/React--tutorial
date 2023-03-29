import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";
import './Styles.css';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>
);