import { NextResponse } from 'next/server';
import projects from '@/data/projects.json';

// 정적 export 시 빌드타임에 단일 JSON 파일로 출력됨
export const dynamic = 'force-static';

// GET 요청 시 JSON 응답 반환
export async function GET() {
  return NextResponse.json({
    code: 200,
    message: '프로젝트 데이터 조회 성공',
    data: projects,
  });
}
