import { InputComponent } from "@components/generic/InputComponent";
import { validates } from "@utils/functions/validates";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import Joi from "joi";

export default function RequestForm( ref, func, employeeList ) {

    const validationSchema = Joi.object({
        codigo: Joi.string().max(50).required().messages({
            'any.required': 'El campo codigo es requerido',
            'string.base': 'El campo codigo debe ser una cadena de texto',
            'string.max': 'El campo codigo debe tener un máximo de 50 caracteres'
        }),
        descripcion: Joi.string().max(50).required().messages({
            'any.required': 'El campo descripcion es requerido',
            'string.base': 'El campo descripcion debe ser una cadena de texto',
            'string.max': 'El campo descripcion debe tener un máximo de 50 caracteres'
        }),
        resumen: Joi.string().max(50).required().messages({
            'any.required': 'El campo resumen es requerido',
            'string.base': 'El campo resumen debe ser una cadena de texto',
            'string.max': 'El campo resumen debe tener un máximo de 50 caracteres'
        }),
        id_empleado: Joi.number().positive().required().messages({
            'any.required': 'El campo empleado es requerido',
            'number.base': 'El campo empleado debe ser un número',
            'number.positive': 'El campo empleado debe ser un número positivo'
        }),
    });

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

            <div className="'mb-4 bg-sky-100'">
                <label htmlFor="id_empleado" className="block text-gray-700">
                    Empleado
                </label>
                <select
                    id="id_empleado"
                    name="id_empleado"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.id_empleado}
                    className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                >
                    <option value="">Seleccione un empleado</option>
                    {employeeList?.map((employee) => {
                        return <option key={employee.id} value={employee.id}>{employee.nombre}</option>
                    })}
                </select>
            </div>
            <button type="submit" ref={ref}/>
        </form>
    );
}

RequestForm.propTypes = {
    ref: PropTypes.object,
    function: PropTypes.func.isRequired,
    employeeList: PropTypes.array.isRequired
}