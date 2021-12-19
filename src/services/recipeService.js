import { request } from "./requester";

const baseUrl = "http://softuni-custom-server.herokuapp.com/data";

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
export const GetRecipes = () =>
  request(`${baseUrl}/recipes`).then((res) => Object.values(res));

export const GetRecipe = (recipeId) => {
  return request(`${baseUrl}/recipes/${recipeId}`);
};

export const update = (recipeId, recipeData) =>
  request.put(`${baseUrl}/recipes/${recipeId}`, recipeData);

export const getOne = (recipeId, signal) => {
  return fetch(`${baseUrl}/recipes/${recipeId}`, { signal }).then((res) =>
    res.json()
  );
};

export const GetCategories = () => {
  return request(
    "http://softuni-custom-server.herokuapp.com/jsonstore/recipeCategories"
  ).then((res) => Object.values(res));
};
