'use client';

import { useThemeContext } from '@/providers/theme-provider';

export function useTheme() {
  const { mounted } = useThemeContext();
  return { mounted };
}
