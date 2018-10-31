import { KeyConvertType } from './types'

export class Config {
  keyConvert: KeyConvertType = 'camelCase'
  // exceptionFilter: string = '' => TODO

  constructor (keyConvert: KeyConvertType) {
    this.keyConvert = keyConvert
  }
}