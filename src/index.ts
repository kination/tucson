import * as camelCase from 'camelcase'
import * as moment from 'moment'

export interface JsonOption<T1> {
  exclude?: Array<keyof T1>
  makeBool?: Array<keyof T1>
  makeDate?: Array<keyof T1>
}

const camelize = (key: string): string => {
  return camelCase(key)
}

export function tuned<T1, T2> (obj: T1, option: JsonOption<T1>, instance: T2): T2 {
  if (!obj) {
    return instance
  }

  for (const key of Object.keys(obj)) {
    const value = obj[key]
    if (option.exclude && option.exclude.indexOf(key as keyof T1) > -1) {
      continue
    }

    if (option.makeBool && option.makeBool.indexOf(key as keyof T1) > -1) {
      instance[camelize(key)] = Boolean(value)
      continue
    }

    if (option.makeDate && option.makeDate.indexOf(key as keyof T1) > -1) {
      if (moment(value).isValid()) {
        instance[camelize(key)] = moment(value).toDate()
      } else {
        instance[camelize(key)] = value
      }
      continue
    }

    instance[camelize(key)] = value
  }

  return instance
} 
