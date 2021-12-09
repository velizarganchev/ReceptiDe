const baseUrl = "http://localhost:3030/jsonstore";

export const GetNewRecipes = async () => {
  let response = await fetch(`${baseUrl}/recipes`);

  let recipes = await response.json();
  let res = Object.values(recipes);

  return res;
};

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

export const GetRecipe = (recipeId) => {
  return fetch(`${baseUrl}/recipes/${recipeId}`).then((res) => res.json());
};
