import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import qs from 'qs';

// 환경별 API URL 설정 함수
const getApiConfig = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    apiURL: process.env.NEXT_PUBLIC_API_URL,
    baseURL: isProduction
      ? '/api' // 운영환경 → nginx 프록시 경유
      : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api', // 개발환경
  };
};

const { apiURL, baseURL } = getApiConfig();

// axios 인스턴스 생성
const api = axios.create({
  baseURL,
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});

// 토큰 세팅 유틸
export const setAuthToken = (token?: string) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// 요청 인터셉터
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (process.env.NEXT_PUBLIC_ENV === 'local' || process.env.NEXT_PUBLIC_ENV === 'development') {
      // console.log(`[Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터
api.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn('401 Unauthorized! 토큰 만료 또는 로그인 필요.');
    }
    return Promise.reject(error);
  }
);

if (process.env.NEXT_PUBLIC_ENV === 'local' || process.env.NEXT_PUBLIC_ENV === 'development') {
  console.log('API Configuration:', { apiURL, baseURL });
}

export default api;
