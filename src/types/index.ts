interface CaseType {
  id: string;
  name: string;
  description: string;
  converter: (text: string) => string;
}
export type { CaseType };