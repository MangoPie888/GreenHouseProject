// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from "react";

export const ClimateContext = createContext();

const useClimate = ()=>useContext(ClimateContext);

const ClimateProvider = (props)=>{
    const [temperature, setTemperature] = useState(50);

    return (
        <ClimateContext.Provider value={{temperature, setTemperature}}>
        {props.children}
        </ClimateContext.Provider>
    )
}


export default ClimateProvider;