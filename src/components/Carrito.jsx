import React from "react";

export const Carrito = () => {
  const products = [
    { name: "COCA-COLA", tax: 3.5 },
    { name: "MANZANA POSTOBON", tax: 3.5 },
    { name: "NARANJA POSTOBON", tax: 3.5 },
  ];

  return (
    <div className="max-w-min ml-10 mt-10 p-2 bg-white shadow-md">
      {/* <h2 className="text-xl font-semibold mb-4">Carrito de Compras</h2> */}

      <div className="overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-4 py-3">
                CANTIDAD
              </th>
              <th scope="col" className="px-6 py-3">
                PRODUCTO
              </th>
              <th scope="col" className="px-6 py-3">
                TAX
              </th>
              <th scope="col" className="px-6 py-3">
                TOTAL
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr className="bg-white  dark:border-gray-700" key={index}>
                
                <td className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap ">
                  1
                 <button className="pl-6"> ➕ </button>
                 <button  className=""> ➖ </button>
                </td>

                <td className="px-6 py-1 font-medium text-gray-900 ">
                  <div className="w-24 break-word">{product.name}</div>
                </td>
                <td
                  scope="row"
                  className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap "
                >
                  {product.tax}
                </td>
                
                <td
                  scope="row"
                  className="px-6 py-1 font-medium text-gray-900 whitespace-nowrap "
                >
                  total
                  <button scope="row" className="pl-4 py-1 whitespace-nowrap">
                    <img
                      className="h-6 w-6"
                      src="src\assets\images\eliminar.png"
                      alt="eliminar"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

        <div className="flex justify-end ">
          <div>
            <p className="text-right text-lg font-bold ">TOTAL</p>
          </div>
          <div>
            <p className=" px-3 text-right text-lg font-bold text-yellow-500">10.5</p>
          </div>
        </div>
      </div>
      
      {/* <div className="flex justify-end "> */}
      <div className="mt-4 ">
        <div className="flex mb-2">
          <button className="w-1/2 bg-gray-300 hover:bg-blue-400 text-gray-600 font-bold py-2 px-4 mr-2">
            DESCUENTO EMPLEADOS
          </button>

          <button className="w-1/2 bg-gray-300 hover:bg-blue-400 text-gray-600 font-bold py-2 px-4 mr-2">
            VISTA CLIENTE
          </button>
        </div>

        <button className="min-w-full bg-gray-300 hover:bg-blue-400 text-gray-600 font-bold py-2 px-4">
          CODIGO PROMOCIONAL
        </button>
      </div>
      {/* </div> */}

    </div>
  );
};
