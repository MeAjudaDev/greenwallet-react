import { createContext, useContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import ToastsContainer from "./ToastContainer";

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    // toast -> { title, message, delay, type }
    const toast = (toast) => {
        toast.id = "Toast__" + uuidv4();
        setToasts(toasts.length ? [...toasts, toast] : [toast]);
    };

    const hideToast = (id) => {
        const newToasts = [...toasts];
        const toastIndex = newToasts.findIndex((t) => t.id === id);
        newToasts.splice(toastIndex, 1);
        setToasts(newToasts);
    };

    return (
        <ToastContext.Provider value={{ toast, hideToast, toasts }}>
            <ToastsContainer toasts={toasts} />
            {children}
        </ToastContext.Provider>
    );
};

const useToast = () => useContext(ToastContext);

export { ToastContext, useToast };
export default ToastProvider;
