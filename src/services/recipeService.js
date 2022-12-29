import * as request from "./requester";

const baseUrl = "https://localhost:7243/api/Recipe";

export const Create = async (recipeData, token) => {
  const response = await fetch(`${baseUrl}/addRecipe`, {
    method: "POST",
    headers: {
      "content-type": "aplication/json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...recipeData }),
  });

  let res = await response.json();
  return res;
};

export const Remove = (recipeId, token) => {
  return fetch(`${baseUrl}/deleteRecipe/${recipeId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};
export const GetRecipes = () =>
  request.get(`${baseUrl}/getAll`).then((res) => Object.values(res));

export const GetMyRecipes = (ownerId) => {
  let query = encodeURIComponent(`_ownerId="${ownerId}"`);

  return request
    .get(`${baseUrl}/recipes?where=${query}`)
    .then((res) => Object.values(res));
};
export const GetEditRecipe = (recipeId) =>
  request.get(`${baseUrl}/recipes${recipeId}`).then((res) => Object.values(res));

export const Update = (recipeId, recipeData) =>
  request.put(`${baseUrl}/updateRecipe/${recipeId}`, recipeData);

export const GetOne = (recipeId, signal) => {
  return fetch(`${baseUrl}/${recipeId}`, { signal }).then((res) =>
    res.json()
  );
};

export const GetCategories = () => {
  return request
    .get(
      "https://localhost:7243/api/Category"
    )
    .then((res) => Object.values(res));
};
