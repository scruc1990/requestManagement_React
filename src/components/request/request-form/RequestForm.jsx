import { InputComponent } from "@components/generic/InputComponent";
import { validates } from "@utils/functions/validates";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import Joi from "joi";
import { SelectComponent } from "@components/generic/SelectComponent";

/**
 * Componente para el formulario de creación de solicitudes
 * 
 * @param {*} ref Objeto de referencia para el botón de envío del formulario 
 * @param {*} func Función que se ejecutará al enviar el formulario
 * @param {*} employeeList Lista de empleados
 * 
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export default function RequestForm( ref, func, employeeList = [] ) {

    /**
     * Esquema de validación para los campos del formulario
     */
    const validationSchema = Joi.object({
        codigo: Joi.string().max(50).required().messages({
            'any.required': 'El campo codigo es requerido',
            'string.empty': 'El campo codigo no puede estar vacío',
            'string.base': 'El campo codigo debe ser una cadena de texto',
            'string.max': 'El campo codigo debe tener un máximo de 50 caracteres'
        }),
        descripcion: Joi.string().max(50).required().messages({
            'any.required': 'El campo descripcion es requerido',
            'string.empty': 'El campo descripcion no puede estar vacío',
            'string.base': 'El campo descripcion debe ser una cadena de texto',
            'string.max': 'El campo descripcion debe tener un máximo de 50 caracteres'
        }),
        resumen: Joi.string().max(50).required().messages({
            'any.required': 'El campo resumen es requerido',
            'string.empty': 'El campo resumen no puede estar vacío',
            'string.base': 'El campo resumen debe ser una cadena de texto',
            'string.max': 'El campo resumen debe tener un máximo de 50 caracteres'
        }),
        id_empleado: Joi.number().positive().required().messages({
            'any.required': 'El campo empleado es requerido',
            'number.base': 'Debe selecionar una opción',
            'number.positive': 'El campo empleado debe ser un número positivo'
        }),
    });

    /**
     * Función para validar los campos del formulario
     * 
     * @param {*} data Valores de los campos del formulario
     * @returns Errores de validación
     */
    const validate = (data) => {
        return validates(data, validationSchema);
    };

    const formik = useFormik({
        initialValues: {
            codigo: '',
            descripcion: '',
            resumen: '',
            id_empleado: ''
        },
        validate,
        onSubmit: (values, helpers) => {
            try {
                func(values);
            } catch {
                alert('Error al crear la solicitud');
            } finally {
                helpers.setSubmitting(false);
                helpers.resetForm();
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputComponent
                id="codigo"
                type="text"
                name="codigo"
                label="Código"
                formik={formik}
            />
            <InputComponent
                id="descripcion"
                type="text"
                name="descripcion"
                label="Descripción"
                formik={formik}
            />
            <InputComponent
                id="resumen"
                type="text"
                name="resumen"
                label="Resumen"
                formik={formik}
            />

            <SelectComponent
                id="id_empleado"
                name="id_empleado"
                label="Empleado"
                formik={formik}
                options={employeeList}
            />
            <button type="submit" ref={ref}/>
        </form>
    );
}

RequestForm.propTypes = {
    ref: PropTypes.object,
    function: PropTypes.func.isRequired,
    employeeList: PropTypes.array.isRequired
}