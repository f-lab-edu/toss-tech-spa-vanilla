const parseResponse = async (response) => {
  const { status } = response;

  if (status === 204) {
    return { status, data: null };
  }
  try {
    const data = await response.json();
    return { status, data };
  } catch (error) {
    console.error("Error", error);
    return { status, data: null };
  }
};

const get = async (url, headers = {}) => {
  const config = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      ...headers,
    }),
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await parseResponse(response);
  } catch (error) {
    console.error(`Fetch error: ${error.message}`);
    return { status: null, data: null, error: error.message };
  }
};

export default {
  get,
};
