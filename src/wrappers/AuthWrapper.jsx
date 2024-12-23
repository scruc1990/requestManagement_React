import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTokenContext } from '@hooks/context/useTokenContext';

/**
 * Wrapper para verificar si el usuario está autenticado, en caso de no estar
 * autenticado redirige al usuario a la página de inicio de sesión
 *
 * @param {*} param0
 * @param {node} param0.children Componentes hijos
 * @returns {JSX.Element}
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
const AuthWrapper = ({ children }) => {
  const { token } = useTokenContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/auth/login');
    }
  }, [token]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};

AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
export default AuthWrapper;
