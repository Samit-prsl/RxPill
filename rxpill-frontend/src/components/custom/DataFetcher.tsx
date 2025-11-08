import { useFetch } from '@/hooks/useFetch'
import { Loader2, AlertTriangle } from 'lucide-react'
import type { DataFetcherProps } from '@/types/DataFetcher'

export function DataFetcher<T>({ queryKey, url, render }: DataFetcherProps<T>) {
  const { data, isLoading, isError, error } = useFetch<T>(queryKey, url)

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-10">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span className="ml-2 text-gray-500">Loading...</span>
      </div>
    )

  if (isError)
    return (
      <div className="flex items-center justify-center py-10 text-red-600">
        <AlertTriangle className="w-5 h-5 mr-2" />
        <span>{error.message}</span>
      </div>
    )

  return <>{data && render(data)}</>
}
