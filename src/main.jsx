import { QueryClient, QueryClientProvider } from '@tanstack/react-query';  
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Instancia de QueryClient para la gestión de las peticiones
 * Se uso la librería react-query para la gestión de las peticiones con
 * la configuración por defecto
 */
export const queryClient = new QueryClient({});
/**
 * Renderiza la aplicación en el elemento con id root y envuelve la aplicación
 * con el proveedor de QueryClient para la gestión de las peticiones
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
