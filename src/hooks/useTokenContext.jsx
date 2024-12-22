import { TokenContext } from "@wrappers/TokenContextWrapper";
import { useContext } from "react";

export const useTokenContext = () => useContext(TokenContext);