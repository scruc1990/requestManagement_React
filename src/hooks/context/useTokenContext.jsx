import { TokenContext } from "@wrappers/TokenContextWrapper";
import { useContext } from "react";

/**
 * Custom hook para obtener el contexto del token
 * 
 * @returns {token, setToken} Contexto del token
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const useTokenContext = () => useContext(TokenContext);