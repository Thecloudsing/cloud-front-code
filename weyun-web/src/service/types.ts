export type ResultType<T> = {
    success: boolean;
    errMsg?: string;
    errCode?: number;
    data: T;
};


interface SchoolType {
    schoolId?: number,
    schoolName?: string,
    regionId?: number,
    schoolAddress?: string,
    schoolPhone?: string,
    schoolMailbox?: string,
    schoolType?: string,
    schoolBrief?: string
}
export interface SchoolQueryType extends SchoolType {
    schoolId: number,
    schoolName: string,
    regionId: number,
    schoolAddress: string,
    schoolPhone: string,
    schoolMailbox: string,
    schoolType: string,
    schoolBrief: string
}
export interface SchoolAddType extends SchoolType {
    schoolName: string,
    regionId: number,
    schoolAddress: string,
    schoolPhone: string,
    schoolMailbox: string,
    schoolType: string,
    schoolBrief: string
}
