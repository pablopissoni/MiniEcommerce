import React from "react";
import { NavBar } from "./components/NavBar";
import { Carrito } from "./components/Carrito";


const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <Carrito/>
      <div>App</div>
    </div>
  );
};

export default App;
