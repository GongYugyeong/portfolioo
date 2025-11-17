'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';

export interface ProjectItem {
  id: number;
  img: string;
  title: string;
  desc: string;
  link: string;
  award: any;
}

interface ApiResponse<T> {
  code: number;
  data: T;
}

interface UseFetchProjectsOptions {
  limit?: number;
}

export const useFetchProjects = ({ limit }: UseFetchProjectsOptions = {}) => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        // 명시적 타입 지정으로 res.data 구조를 확정
        const res = await api.get<ApiResponse<ProjectItem[]>>('/projects');
        const projectData = res.data.data; // 이제 타입 안정적

        setProjects(limit ? projectData.slice(0, limit) : projectData);
      } catch (err: any) {
        console.error('프로젝트 데이터 로드 실패:', err);
        setError('프로젝트 데이터를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [limit]);

  return { projects, loading, error };
};
