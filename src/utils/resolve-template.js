export const resolveTemplate = (template = '{{}}', replaceValue = '') =>
  template.replace('{{}}', replaceValue);
