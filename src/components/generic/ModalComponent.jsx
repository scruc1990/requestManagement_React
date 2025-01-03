import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

/**
 * Componente para renderizar un modal
 *
 * @param {*} param0
 * @param {boolean} param0.open Estado del modal
 * @param {function} param0.setOpen Función para cambiar el estado del modal
 * @param {string} param0.title Título del modal
 * @param {string} param0.context Contexto del modal
 * @param {object} param0.refer Referencia al botón de envío del formulario
 * @param {boolean} param0.status Estado de la petición
 *
 * @returns {JSX.Element}
 *
 * @author Cristian David Herrera
 * @date 2024-12-22
 */
const ModalComponent = ({ open, setOpen, title, context, children, refer, status }) => {
  /**
   * Efecto para cerrar el modal al cambiar el estado de la petición y
   * realizar el cierre del modal cuando realmente se haya creado el elemento
   */
  useEffect(() => {
    if (status) {
      setOpen(false);
    }
  }, [status]);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full pr-4">
              <div className="sm:flex sm:items-start w-full">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left sm:mr-4 w-full">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    {title}
                  </DialogTitle>
                  <div className="mt-2 w-full">
                    <p className="text-sm text-gray-500">{context}</p>
                    <>{children}</>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="onSubmit"
                onClick={() => {
                  refer.current.click();
                }}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Crear
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancelar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
ModalComponent.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string,
  context: PropTypes.string,
  refer: PropTypes.object,
  children: PropTypes.node,
  status: PropTypes.bool
};
export default ModalComponent;
