
/**
 * Función para validar los valores de un formulario de Joi
 * 
 * @param {*} values Valores de los campos del formulario 
 * @param {*} validationSchema Esquema de validación de Joi
 * 
 * @returns {Object} Errores de validación
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const validates = (values, validationSchema) => {
    const { error } = validationSchema.validate(values, { abortEarly: false });
    if (!error) return {};
    const errors = {};
    error.details.forEach((detail) => {
      errors[detail.path[0]] = detail.message;
    });
    return errors;
};