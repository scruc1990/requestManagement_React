import LoginForm from "@components/auth/login-form/LoginForm";
import LoginHeader from "@components/auth/login-header/LoginHeader";

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