import { KeyConvertType } from './types'

export class Config {
  public keyConvert: KeyConvertType = 'none'
  // exceptionFilter: string = '' => TODO

  constructor (keyConvert?: KeyConvertType) {
    if (keyConvert) {
      this.keyConvert = keyConvert
    }
  }
}
