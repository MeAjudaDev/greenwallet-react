import { createContext, useContext, useState } from "react";
import ToastsContainer from './ToastContainer';

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = () => {
        const id = toasts.length;
        const toast = {
            id,
            message: `This is the ${id + 1} toast message`,
            delay: 2500,
        };
        if (toasts.length === 0) {
            setToasts([toast]);
        } else {
            setToasts([...toasts, toast]);
        }
    };

    const removeToast = (id) => {
        let newToasts = toasts;
        const toastIndex = newToasts.findIndex((t) => t.id === id);

        newToasts.splice(toastIndex, 1);
        setToasts(newToasts);
    };

    return (
        <ToastContext.Provider value={{
            addToast,
            removeToast
        }}>
             <ToastsContainer toasts={toasts} />
            {children}
        </ToastContext.Provider>
    )
};

export const useToast = () => {
    return useContext(ToastContext);
}

export default ToastProvider
