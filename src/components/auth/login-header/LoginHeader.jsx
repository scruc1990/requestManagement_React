import PropTypes from "prop-types";

/**
 * Componente para el encabezado de la página de inicio de sesión
 * 
 * @param {*} param0
 * @param {string} param0.title título del encabezado
 * @param {string} param0.description descripción del encabezado
 *  
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
const LoginHeader = ({ title, description }) => {
  return (
    <div className="pb-6 flex flex-col items-center">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

LoginHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default LoginHeader;