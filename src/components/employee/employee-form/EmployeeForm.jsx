import { InputComponent } from "@components/generic/InputComponent";
import { validates } from "@utils/functions/validates";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import Joi from "joi";

/**
 * Componente para el formulario de creación de empleados
 * 
 * @param {*} ref Objeto de referencia para el botón de envío del formulario
 * @param {*} func Función que se ejecutará al enviar el formulario
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export default function EmployeeForm( ref, func ) {

    /**
     * Esquema de validación para los campos del formulario
     * 
     * @author Cristian David Herrera
     * @date 2024-12-22
     */
    const validationSchema = Joi.object({
        id: Joi.number().positive().max(9999999999).required().messages({
            'any.required': 'El campo id es requerido',
            'number.empty': 'El campo id no puede estar vacío',
            'number.base': 'El campo id debe ser un número',
            'number.positive': 'El campo id debe ser un número positivo',
            'number.max': 'El campo id debe tener un máximo de 10 dígitos'
        }),
        nombre: Joi.string().max(50).required().messages({
            'any.required': 'El campo nombre es requerido',
            'string.empty': 'El campo nombre no puede estar vacío',
            'string.max': 'El campo nombre debe tener un máximo de 50 caracteres'
        }),
        fecha_ingreso: Joi.date().max('now').required().messages({
            'any.required': 'El campo fecha de ingreso es requerido',
            'date.empty': 'El campo fecha de ingreso no puede estar vacío',
            'date.base': 'El campo fecha de ingreso debe ser una fecha',
            'date.max': 'El campo fecha de ingreso no puede ser mayor a la fecha actual'
        }),
        salario: Joi.number().positive().required().messages({
            'any.required': 'El campo salario es requerido',
            'number.empty': 'El campo salario no puede estar vacío',
            'number.base': 'El campo salario debe ser un número',
            'number.positive': 'El campo salario debe ser un número positivo'
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

    /**
     * Definición del formulario con la librería Formik
     * 
     * @author Cristian David Herrera
     * @date 2024-12-22
     */
    const formik = useFormik({
        initialValues: {
            id: '',
            nombre: '',
            fecha_ingreso: '',
            salario: ''
        },
        validate,
        onSubmit: (values, helpers) => {
            try {
                func(values);
            } catch {
                alert('Error al crear el empleado');
            } finally {
                helpers.setSubmitting(false);
                helpers.resetForm();
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} >
            <InputComponent
                id="id"
                type="number"
                name="id"
                label="Identificación"
                formik={formik}
            />
            <InputComponent
                id="nombre"
                type="text"
                name="nombre"
                label="Nombre"
                formik={formik}
            />
            <InputComponent
                id="fecha_ingreso"
                type="date"
                name="fecha_ingreso"
                label="Fecha de ingreso"
                formik={formik}
            />
            <InputComponent
                id="salario"
                type="number"
                name="salario"
                label="Salario"
                formik={formik}
            />
            <button type="submit" ref={ref}/>
        </form>
    );
}

EmployeeForm.propTypes = {
    ref: PropTypes.object,
    function: PropTypes.func.isRequired
}