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
            </tr>
          </div>

          {/* <tbody>
            <tr>
              <td className="px-4 py-3">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="./src/assets/images/postobon-pina.jpg"
                  alt="Bebidas"
                />
              </td> */}
          {/* Coloca las otras celdas de la fila según corresponda */}
          {/* </tr>
          </tbody> */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg max-h-28"
                  src={product.image}
                  alt=""
                />
                <div className="text-lg text-gray-600 font-bold" >
                  <p>{product.name}</p>
                  <p>{product.tax + " CAD"}</p>
                </div>
              </div>
            ))}
          </div>


        </table>
        <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

        <div className="flex justify-end">
          <div>
            <p className="text-right text-lg font-bold">TOTAL</p>
          </div>
          <div>
            <p className=" px-3 text-right text-lg font-bold text-yellow-500">
              10.5
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4">
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
    </div>
  );
};
