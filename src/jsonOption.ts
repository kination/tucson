export interface JsonOption<T1> {
  exclude?: Array<keyof T1>
  makeDate?: Array<keyof T1>
  makeBool?: Array<keyof T1>
}
  