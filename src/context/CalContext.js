import React from 'react';
import {createContext} from "react";
import {useState} from 'react';


export const CalContext=createContext()
const CalContextProvider = ({children}) => {
    const [calc,setCalc]=useState({
        sign:"",
        num:56969,
        res:0
    });
    const providervalue={
        calc,setCalc
    }
  return (
    <CalContext.Provider value={providervalue}>
        {children}

    </CalContext.Provider>
  )
}

export default CalContextProvider;