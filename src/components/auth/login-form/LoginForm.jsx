import { InputComponent } from "@components/generic/InputComponent";
import { useTokenContext } from "@hooks/context/useTokenContext";
import { validates } from "@utils/functions/validates";
import { login } from '@services/authServices.js';
import { useFormik } from "formik";
import Joi from "joi";
import { useNavigate } from "react-router-dom";

/**
 * Componente para el formulario de inicio de sesión
 * 
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
const LoginForm = () => {
    const { setToken } = useTokenContext();
    const navigate = useNavigate();

    /**
     * Esquema de validación para el formulario de inicio de sesión
     * 
     * @author Cristian David Herrera
     * @date 2024-12-22
     */
    const validationSchema = Joi.object({
        usuario: Joi.string().max(100).required().messages({
            "string.base": "El usuario debe ser un texto",
            "string.empty": "El usuario es requerido",
            "string.max": "El usuario no debe tener más de {#limit} caracteres"
        }),
        contraseña: Joi.string().max(200).required().messages({
            "string.base": "La contraseña debe ser un texto",
            "string.empty": "La contraseña es requerida",
            "string.max": "La contraseña no debe tener más de {#limit} caracteres"
        })
    });

    /**
     * Función para validar los valores del formulario
     * 
     * @param {*} values valores del formulario
     * @returns {Object} errores de validación
     * 
     * @author Cristian David Herrera
     * @date 2024-12-22
     */
    const validate = (values) => {
        return validates(values, validationSchema);
    };

    /**
     * Definición de los valores iniciales y funciones de formik
     * 
     * @author Cristian David Herrera
     * @date 2024-12-22
     */
    const formik = useFormik({
        initialValues: {
            usuario: '',
            contraseña: ''
        },
        validate,
        onSubmit: async values => {
            console.log(values);
            const result = await login(values);
            if (!result?.success){
                return alert(result?.message);
            } else {
                setToken(result?.token);
                navigate("/");
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">
            <InputComponent
                id="usuario"
                name="usuario"
                label="Usuario"
                type="text"
                formik={formik}
            />
            <InputComponent
                id="contraseña"
                name="contraseña"
                label="Contraseña"
                type="password"
                formik={formik}
            />
            <button type="submit" className="rounded bg-blue-500 text-white px-4 py-2 mt-4">Iniciar sesión</button>
        </form>
    )
};

export default LoginForm;
