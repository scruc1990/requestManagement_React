import LoginForm from "@components/auth/login-form/LoginForm";
import LoginHeader from "@components/auth/login-header/LoginHeader";

/**
 * Componente para la página de autenticación
 * 
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
const AuthPages = () => {

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <LoginHeader
                    title="Iniciar sesión"
                    description="Ingresa tus credenciales para acceder a la plataforma"
                />
                <LoginForm />
            </div>
        </div>
    )
}

export default AuthPages;