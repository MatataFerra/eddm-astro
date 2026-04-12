import { atom, computed } from 'nanostores';
import type { ContentNavigate } from '@/lib/interfaces/share';

export const allArticles = atom<ContentNavigate[]>([]);
export const selectedMonth = atom<string>('febrero');

export const filteredArticles = computed([allArticles, selectedMonth], (articles, month) => {
  return articles
    .filter((art) => art.category?.name.toLowerCase() === month.toLowerCase())
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
});
