export const titelValidate = (imput) => {
  let err = { title: "" };
  if (imput.length < 3) {
    (err.title = "Your title sould be at least 3 characters!");
  }
  return err;
};
export const ingredientValidate = (imput) => {
    let err = { ingredient: "" };
    if (imput.length < 10) {
      (err.ingredient = "Your imput sould be at least 10 characters!");
    }
    return err;
  };
  export const methodValidate = (imput) => {
    let err = { method: "" };
    if (imput.length < 10) {
      (err.method = "Your imput sould be at least 10 characters!");
    }
    return err;
  };

  export function validURL(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }
