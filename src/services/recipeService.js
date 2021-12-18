// const baseUrl = "http://softuni-custom-server.herokuapp.com/jsonstore";
const baseUrl = "http://localhost:3030/data";

export const Create = async (recipeData, token) => {
  const response = await fetch(`${baseUrl}/recipes`, {
    method: "POST",
    headers: {
      "content-type": "aplication/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...recipeData, likes: [] }),
  });

  let res = await response.json();
  return res;
};

export const Remove = (recipeId, token) => {
  return fetch(`${baseUrl}/recipes/${recipeId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
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
  return fetch(
    "http://softuni-custom-server.herokuapp.com/jsonstore/recipeCategories"
  ).then((res) => res.json());
};
