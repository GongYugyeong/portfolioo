'use client';

// url이 없는 프로젝트용 "준비중" 버튼 — 서버 컴포넌트(ProjectCard)에서
// 이벤트 핸들러를 직접 넘길 수 없어 클라이언트 컴포넌트로 분리.
export default function ComingSoonButton({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  return (
    <button
      type="button"
      className={className}
      data-cursor="hover"
      onClick={() => alert('준비중입니다.')}
    >
      {label} <span aria-hidden>↗</span>
    </button>
  );
}
