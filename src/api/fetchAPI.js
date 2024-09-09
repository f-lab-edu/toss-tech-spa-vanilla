const parseResponse = async (response) => {
  const { status } = response;

  if (status === 204) {
    return { status, data: null };
  }
  try {
    const data = await response.json();
    return { status, data };
  } catch (error) {
    throw new Error("JSON 응답을 파싱하는 데 실패했습니다.");
  }
};

async function fetchData(url, headers = {}) {
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
      throw new Error(`HTTP 오류: ${response.status} - ${response.statusText}`);
    }

    return await parseResponse(response);
  } catch (error) {
    console.error(`Fetch 에러: ${error.message}`);
    throw new Error(
      `데이터를 가져오는 중 오류가 발생했습니다: ${error.message}`
    );
  }
}

export default {
  fetchData,
};
