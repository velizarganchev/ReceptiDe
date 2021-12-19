export const request = async (url, method, data) => {

  return fetch(url).then(responseHandler);
};

async function responseHandler(res) {
  let jsonData = await res.json();

  if (res.ok) {
    return jsonData;
  } else {
    throw jsonData;
  }
}
