import {
    createContext,
    useCallback,
    useContext,
    useRef,
    useState,
} from "react";

import ToastsContainer from "./ToastContainer";

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    // toastAttrs pode ser uma string contendo a mensagem do toast
    // ou um objeto contendo { message, delay }
    const toast = (toastAttrs) => {
        const toast = toastAttrs?.message
            ? toastAttrs
            : { message: toastAttrs };

        setToasts(toasts.length ? [...toasts, toast] : [toast]);
    };

    const hideToast = (id) => {
        const newToasts = toasts;
        const toastIndex = newToasts.findIndex((t) => t.id === id);
        newToasts.splice(toastIndex, 1);
        setToasts(newToasts);
    };

    return (
        <ToastContext.Provider value={{ toast, hideToast }}>
            <ToastsContainer toasts={toasts} />
            {children}
        </ToastContext.Provider>
    );
};

const useToast = () => useContext(ToastContext);

export { ToastContext, useToast };
export default ToastProvider;
