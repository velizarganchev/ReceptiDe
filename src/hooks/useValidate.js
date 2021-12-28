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
        if (value.length < 3) {
          setState((state) => ({
            ...state,
            title: commonErr,
          }));
        } else {
          setState((state) => ({ ...state, title: false }));
        }
        break;
      case "ingredient":
        if (value.length < 30) {
          setState((state) => ({
            ...state,
            ingredient: ingredientAndMethodErr,
          }));
        } else {
          setState((state) => ({ ...state, ingredient: false }));
        }
        break;
      case "method":
        if (value.length < 30) {
          setState((state) => ({
            ...state,
            method: ingredientAndMethodErr,
          }));
        } else {
          setState((state) => ({ ...state, method: false }));
        }
        break;
      case "cookTime":
        if (value.length < 3) {
          setState((state) => ({
            ...state,
            cookTime: commonErr,
          }));
        } else {
          setState((state) => ({ ...state, cookTime: false }));
        }
        break;
      case "serves":
        if (!value > 0) {
          setState((state) => ({
            ...state,
            serves: servesErr,
          }));
        } else {
          setState((state) => ({ ...state, serves: false }));
        }
        break;
      case "pictureUrl":
        if (!isValidUrl(value)) {
          setState((state) => ({
            ...state,
            pictureUrl: urlErr,
          }));
        } else {
          setState((state) => ({ ...state, pictureUrl: false }));
        }
        break;
      case "videoUrl":
        if (!isValidUrl(value)) {
          setState((state) => ({
            ...state,
            videoUrl: urlErr,
          }));
        } else {
          setState((state) => ({ ...state, videoUrl: false }));
        }
        break;

      default:
        break;
    }

    // try {
    //   if (value.length < 3) {
    //     setState((state) => ({
    //       ...state,
    //       handler,
    //     }));
    //   } else {
    //     setState((state) => ({ ...state, title: false }));
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
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
