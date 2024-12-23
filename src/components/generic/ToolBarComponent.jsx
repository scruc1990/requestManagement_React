import ModalComponent from "./ModalComponent";
import { useState } from "react";

/**
 * Componente para renderizar una barra de herramientas
 * 
 * @param {*} text Texto del botón 
 * @param {*} title Título del modal
 * @param {*} context Contexto del modal
 * @param {*} refer Referencia al botón de envío del formulario
 * @param {*} children Componentes hijos
 * @param {*} status estado de la petición
 * 
 * @returns {JSX.Element}
 * 
 * @author Cristian David Herrera
 * @date 2024-12-22 
 */
export default function ToolBarComponent(text, title, context, refer, children, status) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-start">
                <button className="bg-gray-200 hover:bg-gray-400 text-gray-500 font-bold py-2 px-4 rounded"
                onClick={() => setOpen((old) => !old)}> + Nuevo {text}</button>
            </div>

            <ModalComponent
                open={open}
                setOpen={setOpen}
                title={title}
                context={context}
                refer={refer}
                status={status}
            >
                {children}
            </ModalComponent>
        </>
    )
}