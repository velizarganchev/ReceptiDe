import { request } from "./requester";
const baseUrl = "http://softuni-custom-server.herokuapp.com";

export const Create = async (recipeData, token) => {
  const response = await fetch(`${baseUrl}/data/recipes`, {
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
  return fetch(`${baseUrl}/data/recipes/${recipeId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};
export const GetRecipes = () =>  request(`${baseUrl}/data/recipes`);

export const GetRecipe = (recipeId) => {
  return fetch(`${baseUrl}/data/recipes/${recipeId}`).then((res) => res.json());
};

export const GetRecipebyName = (recipeName) => {
  return fetch(`${baseUrl}/data/recipes/${recipeName}`).then((res) => res.json());
};

export const GetCategories = () => {
  return fetch(
    `${baseUrl}/jsonstore/recipeCategories`
  ).then((res) => res.json());
};
