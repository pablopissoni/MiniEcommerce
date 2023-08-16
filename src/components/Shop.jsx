import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/productsSlice";

export const Shop = ({ products }) => { // hereda  products de APP
  const productsSlice = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  console.log("ProductsSlice SHOP------>",productsSlice)

  const addShopping =  (product) => {
    dispatch(addProduct(product))
  }



  //*-----------------------------------------------------------------------------------------
  return (
<div className="w-2/5 mt-10 p-2 bg-white shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead>
            <tr>
              <th scope="col" className="px-4 py-3">
                BEBIDAS
              </th>
              <th scope="col" className="px-6 py-3">
                COMIDAS
              </th>
              <th scope="col" className="px-6 py-3">
                REPOSTERIA Y PANADERIA
              </th>
              <th scope="col" className="px-6 py-3">
                REFRIGERADOS
              </th>
              <th scope="col" className="px-6 py-3">
                <img
                  src="./src/assets/images/icon-aplicaciones.svg"
                  alt="icons"
                  className="h-5"
                />
              </th>
            </tr>
          </thead>
        </table>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index}>
              <button
              onClick={() => addShopping(product)}
              >
                <img
                  className="h-auto max-w-full max-h-28"
                  src={product.image}
                  alt=""
                />
              </button>

              <div className="text-lg text-gray-600 font-bold">
                <p>{product.name}</p>
                <p>{product.tax + " CAD"}</p>
              </div>
            </div>
          ))}

          <img
            className="h-auto max-w-full max-h-28"
            src="./src/assets/images/flecha-izquierda.png"
            alt="Flecha izquierda"
          />
        </div>
      </div>

      <div className="mt-4  flex">
        <div className="w-3/4">
          <div className="flex mb-2 h-20">
            <button className="w-1/3 bg-gray-300 hover:bg-blue-400 text-gray-600 py-2 px-4 mr-2 flex items-center justify-center">
              <img className="h-16" src="./src/assets/images/pngwing.com.png" alt="" />
            </button>

            <button className="w-1/3 bg-gray-300 hover:bg-blue-400 text-gray-600 py-2 px-4 mr-2 flex items-center justify-center">
              <img className="h-auto" src="./src/assets/images/visa.png" alt="" />
            </button>

            <button className="w-1/3 bg-gray-300 hover:bg-blue-400 text-gray-600 py-2 px-4 mr-2 flex items-center justify-center">
              <img className="h-16" src="./src/assets/images/mastercard.png" alt="" />
            </button>
          </div>

          <div className="flex mb-2">
            <button className="w-1/3 bg-gray-300 hover:bg-blue-400 text-gray-600 py-2 px-4 mr-2 flex items-center justify-center">
              <img className="h-16" src="./src/assets/images/uber-eats.jpg" alt="" />
            </button>

            <button className="w-1/3 bg-gray-300 hover:bg-blue-400 text-gray-600 py-2 px-4 mr-2 flex items-center justify-center">
              <img  className="h-16" src="./src/assets/images/tarjeta-de-debito.png" alt="" />
            </button>

            <button className="w-1/3 bg-gray-300 hover:bg-blue-400 text-gray-600 py-2 px-4 mr-2 flex items-center justify-center ">
              <img
                src="./src/assets/images/sum-icon.png"
                alt="suma"
                className="h-5"
              />
            </button>
          </div>

          </div>
        <div className="w-1/4 bg-gray-600  hover:bg-blue-400 flex items-center justify-center ">
          <button className="text-yellow-300 text-xl py-2 px-4 mr-2">
            PAGAR
          </button>
        </div>
      </div>
    </div>
  );
};
