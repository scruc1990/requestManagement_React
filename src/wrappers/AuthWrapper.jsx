import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTokenContext } from '@hooks/useTokenContext';


const AuthWrapper = ({ children }) => {
    const { token } = useTokenContext();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!token) {
            navigate("/auth/login");
        }
    }, [token]);

    if (!token) {
        return null;
    }

    return <>{children}</>
}

AuthWrapper.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthWrapper;