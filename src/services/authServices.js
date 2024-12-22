import { publicAxios } from "@utils/axios/axios.js";

export const login = async ({ usuario, contraseña }) => {
    const { data } = await publicAxios.post('/auth/login', { usuario, contraseña });
    return data;
}