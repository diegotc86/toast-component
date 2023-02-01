import React from "react";

function useKeydowm(key, callback) {
  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === key) callback(event);
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [callback, key]);
}

export default useKeydowm;
