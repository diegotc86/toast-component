import React from "react";

import Toast from "../Toast";
import { ToastsContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, handleDismissToast } = React.useContext(ToastsContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} handleClose={() => handleDismissToast(id)}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
