import { RouterProvider }    from 'react-router-dom'; 
import { Suspense }          from 'react';
import { router } from "@router/router";
import { TokenContextWrapper } from '@wrappers/TokenContextWrapper';

/**
 * Componente principal de la aplicación, el cual envuelve la aplicación
 * con el contexto del token de autenticación y el proveedor de rutas
 * 
 * 
 * @returns {JSX.Element} 
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
function App() {

  return (
    <TokenContextWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </TokenContextWrapper>
  )
}

export default App
