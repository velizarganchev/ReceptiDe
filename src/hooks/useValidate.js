import { useState } from "react";

const commonErr = "Your imput sould be at least 3 characters!";
const ingredientAndMethodErr = "Your imput sould be at least 30 characters!";
const servesErr = "Your imput sould be number greater than 1!";
const urlErr = "Please enter a valid url address!";

const useValidate = () => {
  const [state, setState] = useState({
    title: "",
    ingredient: "",
    method: "",
    cookTime: "",
    serves: 0,
    pictureUrl: "",
    videoUrl: "",
  });

  const setErrors = (value, handler) => {
    switch (handler) {
      case "title":
        value.length < 3
          ? setState((state) => ({
              ...state,
              title: commonErr,
            }))
          : setState((state) => ({ ...state, title: false }));
        break;
      case "ingredient":
        value.length < 30
          ? setState((state) => ({
              ...state,
              ingredient: ingredientAndMethodErr,
            }))
          : setState((state) => ({ ...state, ingredient: false }));
        break;
      case "method":
        value.length < 30
          ? setState((state) => ({
              ...state,
              method: ingredientAndMethodErr,
            }))
          : setState((state) => ({ ...state, method: false }));
        break;
      case "cookTime":
        value.length < 3
          ? setState((state) => ({
              ...state,
              cookTime: commonErr,
            }))
          : setState((state) => ({ ...state, cookTime: false }));
        break;
      case "serves":
        !value > 0
          ? setState((state) => ({
              ...state,
              serves: servesErr,
            }))
          : setState((state) => ({ ...state, serves: false }));
        break;
      case "pictureUrl":
        !isValidUrl(value)
          ? setState((state) => ({
              ...state,
              pictureUrl: urlErr,
            }))
          : setState((state) => ({ ...state, pictureUrl: false }));
        break;
      case "videoUrl":
        !isValidUrl(value)
          ? setState((state) => ({
              ...state,
              videoUrl: urlErr,
            }))
          : setState((state) => ({ ...state, videoUrl: false }));
        break;
      default:
        break;
    }
  };
  return [state, setErrors];
};
export const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};
export default useValidate;
