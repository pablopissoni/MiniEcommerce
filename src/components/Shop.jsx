import React from "react";

export const Shop = ({ products }) => {
  // const products = [
  //     { name: "COCA-COLA", tax: 3.5 },
  //     { name: "MANZANA POSTOBON", tax: 3.5 },
  //     { name: "NARANJA POSTOBON", tax: 3.5 },
  //   ];
  //*-----------------------------------------------------------------------------------------
  return (
    <div className="max-w-max mt-10 p-2 bg-white shadow-md">
      {/* <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2> */}

      <div className="overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div className="text-xs text-gray-700 uppercase bg-gray-50 ">
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
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full max-h-28"
                  src={product.image}
                  alt=""
                />
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
        </table>
      </div>

      {/* --------------------------------- */}
      <div className="mt-4  flex ">

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
        {/* ---------------- */}
        <div className="w-1/4 bg-gray-600  hover:bg-blue-400 flex items-center justify-center ">
          <button className=" text-yellow-300 text-xl py-2 px-4 mr-2 ">
            PAGAR
          </button>
        </div>

      </div>
      {/*------------------------------------- */}
    </div>
  );
};
