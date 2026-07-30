// public 자산 경로 — next/link를 안 거치는 <a>/<object>는 basePath가 안 붙어서 직접 붙인다.
export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}
