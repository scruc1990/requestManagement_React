/**
 * Componente generico para select
 *
 * @param {*} param0
 * @param {string} param0.id Identificador del campo
 * @param {string} param0.name Nombre del campo
 * @param {string} param0.label Etiqueta del campo
 * @param {object} param0.formik Objeto de formik
 *
 * @returns {JSX.Element}
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
export const SelectComponent = ({ id, name, label, formik, options }) => {
  return (
    <div className="'mb-4 bg-sky-100'">
      <label htmlFor={id} className="block text-gray-700">
        {label}
      </label>
      <select
        id={id}
        name={id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      >
        <option value="">Seleccione un {label}</option>
        {options?.map((employee) => {
          return (
            <option key={employee.id} value={employee.id}>
              {employee.nombre}
            </option>
          );
        })}
      </select>
      {formik.touched[name] && formik.errors[name] ? (
        <div className="text-red-500 text-sm">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};
