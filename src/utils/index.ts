export function getNumericalDateValue(dateString: string): number {
  return Number(dateString.replace(/-/g, ''));
}