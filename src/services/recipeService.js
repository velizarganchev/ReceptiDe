const baseUrl = "http://softuni-custom-server.herokuapp.com/jsonstore";


export const Create = async (recipeData) => {
  const response = await fetch(`${baseUrl}/recipes`, {
    method: "POST",
    headers: {
      "content-type": "aplication/json",
    },
    body: JSON.stringify(recipeData),
  });
  
  let res = await response.json();
  return res;
};
export const GetRecipes = async () => {
  let response = await fetch(`${baseUrl}/recipes`);

  let recipes = await response.json();
  let res = Object.values(recipes);

  return res;
};


export const GetRecipe = (recipeId) => {
  return fetch(`${baseUrl}/recipes/${recipeId}`).then((res) => res.json());
};

export const GetCategories = () => {
  return fetch(`${baseUrl}/recipeCategories`).then((res) => res.json());
};

