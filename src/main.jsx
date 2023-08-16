import React from "react";
import { createRoot } from "react-dom/client";
// import ReactDom from "react-dom";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import "./index.css";

const rootElement = document.getElementById('root'); // Obtén el elemento raíz del DOM

const root = createRoot(rootElement); // Crea el root, Usa createRoot desde react-dom/client

root.render(
  <Provider store={store}> {/* Proporciona el store al Provider */}
    <React.StrictMode>
      <App /> {/* Renderiza tu componente App */}
    </React.StrictMode>
  </Provider>
);
// version reparada ^^^^^^^^

// // ReactDOM.createRoot(document.getElementById("root"))
// // root.render(
//   ReactDOM.createRoot(document.getElementById("root")).render(
  
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root") // se agrego esta linea junto con la linea 3 (ReactDOM)
// );
