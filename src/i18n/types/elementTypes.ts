
export type ElementTranslations = Record<string, string>;

export interface ElementDetailsType {
  symbol: string;
  name: string;
  atomicNumber: number;
  description?: string;
  properties?: Record<string, any>;
}
