// API 응답 타입 정의
export type ApiResponse<T> = {
  status: number;
  data: T[] | null;
};

// 응답 파싱 타입 정의
export type ParseResponse = <T>(response: Response) => Promise<ApiResponse<T>>;

// 데이터 요청 타입 정의
export type FetchData = <T>(
  url: string,
  headers?: HeadersInit
) => Promise<ApiResponse<T>>;
