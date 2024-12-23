import { InputComponent } from "@components/generic/InputComponent";
import { validates } from "@utils/functions/validates";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import Joi from "joi";

export default function EmployeeForm( ref, func ) {

    const validationSchema = Joi.object({
        id: Joi.number().positive().max(9999999999).required().messages({
            'any.required': 'El campo id es requerido',
            'number.base': 'El campo id debe ser un número',
            'number.positive': 'El campo id debe ser un número positivo',
            'number.max': 'El campo id debe tener un máximo de 10 dígitos'
        }),
        nombre: Joi.string().max(50).required().messages({
            'any.required': 'El campo nombre es requerido',
            'string.max': 'El campo nombre debe tener un máximo de 50 caracteres'
        }),
        fecha_ingreso: Joi.date().max('now').required().messages({
            'any.required': 'El campo fecha de ingreso es requerido',
            'date.base': 'El campo fecha de ingreso debe ser una fecha',
            'date.max': 'El campo fecha de ingreso no puede ser mayor a la fecha actual'
        }),
        salario: Joi.number().positive().required().messages({
            'any.required': 'El campo salario es requerido',
            'number.base': 'El campo salario debe ser un número',
            'number.positive': 'El campo salario debe ser un número positivo'
        }),
    });

    const validate = (data) => {
        return validates(data, validationSchema);
    };

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