import { createContext, useState } from 'react';

/**
 * Creación del contexto del token
 */
export const TokenContext = createContext({});

/**
 * Wrapper para el contexto del token
 * 
 * @param {*} param0
 * @param {node} param0.children Componentes hijos
 * 
 * @returns {JSX.Element} 
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const TokenContextWrapper = ({ children }) => {
    const [token, setToken] = useState(null);
    return (
        <TokenContext.Provider value={{token, setToken}}>
            {children}
        </TokenContext.Provider>
    );
};