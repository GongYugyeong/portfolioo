// public 폴더 자산을 코드에서 참조할 때 basePath 자동 prefix
// 예) withBasePath('/videos/main.mp4') → '/yugyeong/videos/main.mp4' (prod) / '/videos/main.mp4' (dev)
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const withBasePath = (path: string): string => {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
};
