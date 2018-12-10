export default function camelCase (target: string): string {
  const wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/
  const seperated = target.split(wordSeparators)
  let converted = ''
  for (const text of seperated) {
    if (seperated.indexOf(text) !== 0) {
      converted += text.charAt(0).toUpperCase() + text.slice(1)
    } else {
      converted += text
    }
  }

  return converted
}
