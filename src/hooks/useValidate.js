import { useState, useEffect } from "react";

const useValidate = (currData) => {
  const [errors, setErrors] = useState({ name: false });

  useEffect(() => {
    if (currData.length < 3) {
      setErrors((state) => ({
        ...state,
        name: "Your name sould be at least 3 characters!",
      }));
    } else {
      setErrors((state) => ({ ...state, name: false }));
    }
  }, [currData.length]);
  
  return [errors, setErrors];
};
export default useValidate;
