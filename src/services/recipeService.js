const baseUrl = "http://localhost:3030/jsonstore";

export const GetNewRecipes = async () => {
  let response = await fetch(`${baseUrl}/recipes`);

  let recipes = await response.json()
  let res = Object.values(recipes)
  return res;
};
