import ModalComponent from "./ModalComponent";
import { useEffect, useState } from "react";

export default function ToolBarComponent(text, title, context, refer, children) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex justify-start">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setOpen((old) => !old)}>Nuevo {text}</button>
            </div>

            <ModalComponent
                open={open}
                setOpen={setOpen}
                title={title}
                context={context}
                refer={refer}
            >
                {children}
            </ModalComponent>
        </>
    )
}