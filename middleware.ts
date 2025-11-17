import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;

  // 허용할 locale 목록
  const locales = ["ko", "en"];

  // 1) 루트 "/"는 기본 locale로 redirect
  if (path === "/") {
    url.pathname = "/ko";
    return NextResponse.redirect(url);
  }

  // 2) /ko/... /en/... 가 아닌 경우 → 404로 rewrite
  const isValidLocalePath = locales.some((lng) => path.startsWith(`/${lng}`));
  if (!isValidLocalePath) {
    url.pathname = "/404"; // locale 없어도 404로
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
