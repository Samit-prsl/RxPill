export interface DataFetcherProps<T> {
  queryKey: string | unknown[]
  url: string
  render: (data: T) => React.ReactNode
}
