export default function snakeCase (target: string): string {
  const wordSeparators = /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/
  const capitals = /[A-Z\u00C0-\u00D6\u00D9-\u00DD]/g

  const str = target.replace(capitals, (match) => {
    return ' ' + (match.toLowerCase() || match)
  })

  return str.trim().split(wordSeparators).join('_')
}
