export function encodeId(id?: string | number, separator = '/'): string {
  return id !== undefined && id !== null ? `${separator}${encodeURIComponent(id)}` : '';
}

export function safeContext(context?: string): string {
  return context ?? '';
}
