import React, { createContext } from 'react';
import useApi from '../useApi';
export const Context = createContext();
export const Provider = props => {
    return (
        <Context.Provider value={{ ...useApi() }}>
            { props.children }
        </Context.Provider >
    )
}
// export const SMSContext = createContext();
// export const SMSProvider = props =>{
//     return (
//         <SMSContext.Provider value={{...useAPI()}}>
//             {props.children}
//         </SMSContext.Provider>
//     )} 