import CustomError from "@/utils/CustomError";

const parseResponse = async (response) => {
  const { status } = response;

  if (status === 204) {
    return { status, data: null };
  }
  try {
    const data = await response.json();
    return { status, data };
  } catch (error) {
    throw new CustomError("JSON 응답을 파싱하는 데 실패했습니다.", status); // CustomError 사용
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
      throw new CustomError(
        `HTTP 오류: ${response.status} - ${response.statusText}`,
        response.status
      );
    }

    return await parseResponse(response);
  } catch (error) {
    throw new CustomError(
      `데이터를 가져오는 중 오류가 발생했습니다: ${error.message}`
    );
  }
}

export default {
  fetchData,
};
