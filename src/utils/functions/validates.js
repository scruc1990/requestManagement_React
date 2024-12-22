export const validates = (values, validationSchema) => {
    const { error } = validationSchema.validate(values, { abortEarly: false });
    if (!error) return {};
    const errors = {};
    error.details.forEach((detail) => {
      errors[detail.path[0]] = detail.message;
    });
    return errors;
};