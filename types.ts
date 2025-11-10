
import type { ReactNode } from 'react';

export interface GasLaw {
  id: string;
  name: string;
  description: string;
  formula: ReactNode;
  variables: { [key: string]: string };
  example: {
    title: string;
    scenario: string;
    calculation: ReactNode;
    result: string;
  };
}
