import React, { createContext, useReducer } from 'react';
import TransctionReducer from './transReducer'
const initialTransction = [

  { Amount: 500, desc: "Cash" },
  { Amount: -50, desc: "book" },
  { Amount: -190, desc: "travel charges" }
]
export const transctionContext = createContext(initialTransction)
export const Transctionprovider = ({ Children }) => {
  let [state, dispatch] = useReducer(TransctionReducer, initialTransction)

  function addTransction(transObj) {
    dispatch({
      type: 'Add_TRANSCTION',
      payload: {
        amount: transObj.Amount,
        desc: transObj.desc
      },
    })
  }
  return (
    <transctionContext.Provider value={{
      transction: state,
      addTransction
    }}>
      {Children}
    </transctionContext.Provider>
  )

}