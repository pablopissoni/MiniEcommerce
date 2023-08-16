import { configureStore } from '@reduxjs/toolkit'
import  productsReducer  from './productsSlice' 

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

//Esto crea una tienda Redux y también configura 
//automáticamente la extensión Redux DevTools para que pueda inspeccionar la tienda mientras desarrolla.