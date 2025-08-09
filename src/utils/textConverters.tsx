export const textConverters = {
  uppercase: (text: string): string => text.toUpperCase(),

  lowercase: (text: string): string => text.toLowerCase(),

  titleCase: (text: string): string =>
    text.replace(/\w\S*/g, (txt) =>
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ),

  sentenceCase: (text: string): string =>
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),

  camelCase: (text: string): string =>
    text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    ).replace(/\s+/g, ''),

  pascalCase: (text: string): string =>
    text.replace(/(?:^\w|[A-Z]|\b\w)/g, (word) =>
      word.toUpperCase()
    ).replace(/\s+/g, ''),

  snakeCase: (text: string): string =>
    text.replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_'),

  kebabCase: (text: string): string =>
    text.replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('-'),

  constantCase: (text: string): string =>
    text.replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toUpperCase())
      .join('_')

  ,
  alternating: (text: string): string =>
    text
      .split('')
      .map((char, i) => (i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
      .join(''),

  inverse: (text: string): string =>
    text
      .split('')
      .map(char =>
        char === char.toUpperCase()
          ? char.toLowerCase()
          : char.toUpperCase()
      )
      .join(''),

  random: (text: string): string =>
    text
      .split('')
      .map(char =>
        Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
      )
      .join(''),

  capitalized: (text: string): string =>
    text
      .toLowerCase()
      .replace(/\b\w/g, char => char.toUpperCase()),

  dot: (text: string): string =>
    text
      .toLowerCase()
      .replace(/\s+/g, '.')
      .replace(/[^a-z0-9.]/g, ''),

  path: (text: string): string =>
    text
      .toLowerCase()
      .replace(/\s+/g, '/')
      .replace(/[^a-z0-9/]/g, ''),

  header: (text: string): string =>
    text
      .replace(/\s+/g, '-')
      .replace(/[^a-zA-Z0-9-]/g, '')
      .replace(/\b\w/g, char => char.toUpperCase())
};
