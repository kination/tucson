import { KeyConvertType } from './types'

export class Config {
  public keyConvert: KeyConvertType = 'camelCase'
  // exceptionFilter: string = '' => TODO

  constructor (keyConvert: KeyConvertType) {
    this.keyConvert = keyConvert
  }
}