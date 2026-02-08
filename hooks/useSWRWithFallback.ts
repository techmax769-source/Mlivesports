import useSWR from 'swr';
import { fetchAPI } from '@/lib/api';

export const useSWRWithFallback = <T>(
  key: string | null,
  endpoint: string,
  options?: {
    fallbackData?: T;
    refreshInterval?: number;
    revalidateOnFocus?: boolean;
  }
) => {
  const swr = useSWR<T>(
    key,
    () => fetchAPI<T>(endpoint),
    {
      fallbackData: options?.fallbackData,
      refreshInterval: options?.refreshInterval,
      revalidateOnFocus: options?.revalidateOnFocus ?? false,
      onError: (error) => {
        console.error('SWR Error:', error);
      },
    }
  );

  const isLoading = !swr.error && !swr.data;
  const isError = !!swr.error;

  return {
    ...swr,
    isLoading,
    isError,
  };
};
