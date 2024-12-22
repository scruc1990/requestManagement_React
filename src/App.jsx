import { RouterProvider }    from 'react-router-dom'; 
import { Suspense }          from 'react';
import { router } from "@router/router";
import { TokenContextWrapper } from '@wrappers/TokenContextWrapper';

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
