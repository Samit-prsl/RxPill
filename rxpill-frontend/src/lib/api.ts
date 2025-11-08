
export async function api<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options?.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.text()
    throw new Error(error || 'API Error')
  }

  return response.json() as Promise<T>
}
