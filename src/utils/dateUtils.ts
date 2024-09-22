export function formatDate(timestamp: string) {
  return new Date(timestamp).toLocaleDateString();
}
