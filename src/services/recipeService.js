import * as request from "./requester";

const baseUrl = "http://softuni-custom-server.herokuapp.com/data";

export const Create = async (recipeData, token) => {
  const response = await fetch(`${baseUrl}/recipes`, {
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
  return fetch(`${baseUrl}/recipes/${recipeId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  }).then((res) => res.json());
};
export const GetRecipes = () =>
  request.get(`${baseUrl}/recipes`).then((res) => Object.values(res));

export const GetMyRecipes = (ownerId) =>{
  let query = encodeURIComponent(`_ownerId="${ownerId}"`);

  return request
    .get(`${baseUrl}/recipes?where=${query}`)
    .then((res) => Object.values(res));
}

export const Update = (recipeId, recipeData) =>
  request.put(`${baseUrl}/recipes/${recipeId}`, recipeData);

export const GetOne = (recipeId, signal) => {
  return fetch(`${baseUrl}/recipes/${recipeId}`, { signal }).then((res) =>
    res.json()
  );
};

export const GetCategories = () => {
  return request
    .get(
      "http://softuni-custom-server.herokuapp.com/jsonstore/recipeCategories"
    )
    .then((res) => Object.values(res));
};
