export function lastSegment(path: string): string {
  const parts = path.split("/");
  return parts[parts.length - 1].toLowerCase();
}
