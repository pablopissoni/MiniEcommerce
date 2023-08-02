import React from "react";
import { NavBar } from "./components/NavBar";
import { Carrito } from "./components/Carrito";
import { Shop } from "./components/Shop";


const App = () => {
  const products = [
    { name: "COCA-COLA", tax: 3.5, image: "./src/assets/images/cocacola-lata.jpg" },
    { name: "COCA-COLA ZERO", tax: 3.5, image: "./src/assets/images/cocacola-zero.jpg"},
    { name: "MANZANA POST.", tax: 3.5, image: "./src/assets/images/postobon-manzana-lata.jpg"},
    { name: "AGUA NATURAL", tax: 3.5, image: "./src/assets/images/agua-500ml.jpg"},
    { name: "NARANJA POST.", tax: 3.5, image: "./src/assets/images/naranja-postobon.jpg"},
    { name: "TROPICAL 2L", tax: 3.5, image: "./src/assets/images/tropical-ecuador-botella.jpg"},
    { name: "PIÑA POSTOBON", tax: 3.5, image: "./src/assets/images/postobon-pina.jpg"},
  ]

//*------------------------------------------------------------------------------------
  return (
    <div className="bg-gray-300 h-screen">
      <NavBar/>

      <div className="flex space-x-4">
        <Carrito />
        <Shop products = {products}/>
      </div>

      <div>App</div>
    </div>
  );
};``

export default App;
