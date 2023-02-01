import React from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  useKeydown(
    "Escape",
    React.useCallback(() => setToasts([]), [])
  );

  const handleDismissToast = React.useCallback(function (id) {
    setToasts((current) => {
      return current.filter((toast) => toast.id !== id);
    });
  }, []);

  const handleCreateToast = React.useCallback(function (variant, message) {
    setToasts((current) => {
      return [...current, { id: crypto.randomUUID(), variant, message }];
    });
  }, []);

  const value = React.useMemo(
    () => ({ toasts, handleDismissToast, handleCreateToast }),
    [toasts, handleDismissToast, handleCreateToast]
  );

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastProvider;
