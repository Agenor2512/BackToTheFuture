import { createContext, useState} from "react";

const ThermesContext = createContext();

// eslint-disable-next-line react/prop-types
export function ThermesProvider({children}) {
    const [thermes, setThermes] = useState([]) 
    
    return (
        <ThermesContext.Provider value = {{thermes, setThermes}}>
            {children}
        </ThermesContext.Provider>
    );
}

export default ThermesContext;