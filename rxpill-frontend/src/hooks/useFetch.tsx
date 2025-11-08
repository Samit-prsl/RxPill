import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { api } from '@/lib/api'

export function useFetch<T>(
  key: string | unknown[],
  url: string,
  options?: UseQueryOptions<T, Error>
) {
  return useQuery<T, Error>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn: () => api<T>(url),
    ...options,
  })
}
