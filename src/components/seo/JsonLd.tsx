// JSON-LD 주입 — 서버에서만 렌더되므로 클라이언트 번들에 안 들어간다.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // 스키마는 우리가 만든 데이터라 사용자 입력이 아니다. </script> 조기 종료만 막는다.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
