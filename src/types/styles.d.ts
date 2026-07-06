// 전역(비-module) 스타일의 side-effect import 타입 선언.
//   import '@/styles/globals.scss';  import '@/styles/theme.scss';
// CSS Modules(*.module.scss)는 Next가 더 구체적으로 선언하므로 영향 없음(클래스 타이핑 유지).
declare module '*.scss';
declare module '*.css';
