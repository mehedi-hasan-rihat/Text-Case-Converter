import type { CaseType } from '../types';
import { textConverters } from '../utils/textConverters';

export const caseTypes: CaseType[] = [
  {
    id: 'uppercase',
    name: 'UPPERCASE',
    description: 'Convert all text to capitals',
    converter: textConverters.uppercase
  },
  {
    id: 'lowercase',
    name: 'lowercase',
    description: 'Convert all text to lowercase',
    converter: textConverters.lowercase
  },
  {
    id: 'titleCase',
    name: 'Title Case',
    description: 'Capitalize first letter of each word',
    converter: textConverters.titleCase
  },
  {
    id: 'sentenceCase',
    name: 'Sentence case',
    description: 'Capitalize first letter of sentences',
    converter: textConverters.sentenceCase
  },
  {
    id: 'camelCase',
    name: 'camelCase',
    description: 'No spaces, capitalize each word except first',
    converter: textConverters.camelCase
  },
  {
    id: 'pascalCase',
    name: 'PascalCase',
    description: 'Like camel case but first letter capitalized',
    converter: textConverters.pascalCase
  },
  {
    id: 'snakeCase',
    name: 'snake_case',
    description: 'Underscores instead of spaces',
    converter: textConverters.snakeCase
  },
  {
    id: 'kebabCase',
    name: 'kebab-case',
    description: 'Hyphens instead of spaces',
    converter: textConverters.kebabCase
  },
  {
    id: 'constantCase',
    name: 'CONSTANT_CASE',
    description: 'Uppercase with underscores',
    converter: textConverters.constantCase
  }
];