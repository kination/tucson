export interface JsonOption<T1> {
    exclude?: Array<keyof T1>;
    makeDate?: Array<keyof T1>;
}
export declare function tuned<T1, T2>(obj: T1, option: JsonOption<T1>, instance: T2): T2;
