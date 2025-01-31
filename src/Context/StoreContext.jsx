
import { createContext, useEffect, useState } from "react";
import { user_list,employee_data, project } from "../assets/Assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const contextValue = {
        user_list,
        employee_data,
        project,
    };


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
        )

}

export default StoreContextProvider;