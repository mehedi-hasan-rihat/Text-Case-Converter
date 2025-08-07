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
};
