import * as camelCase from 'camelcase'
import * as moment from 'moment'

export interface JsonOption<T1> {
  exclude?: Array<keyof T1>
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

    // ignore key-value when key is included in 'exclude' list
    if (option.exclude && option.exclude.indexOf(key as keyof T1) > -1) {
      continue
    }

    // make data as form of 'Date' when key is included in 'exclude' list
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
