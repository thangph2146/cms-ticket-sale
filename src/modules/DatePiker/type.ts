export interface TypeSate {
    date: number;
    month: number;
    year: number;
    day: number;
}
export interface TypeActive {
    activeDate: number;
}

export interface TypePropsTable {
    state: TypeSate;
    active: TypeActive;
}
export interface TypeDay {
    monthSate: number;
    number: number;
    active: number;
}
export interface TypeSate {
    date: number;
    month: number;
    year: number;
    day: number;
}
export interface TypeActive {
    activeDate: number;
    activeMonth: number;
    activeYear: number;
}
export interface TypePropsTickDatePiker {
    state: TypeSate;
    monthPrevNext: (boolean: boolean) => void;
    handleClick: (e: TypeDay) => void;
    active: TypeActive;
    onChange: (e: any) => void;
    valueRadio: number;
}
type TypeWeek = Array<TypeDay>;

export interface TypeTable {
    handleClick: (e: TypeDay) => void;
    valueRadio: number;
    weeks: any;
}
export type TypeRenderColumnTable = (
    week: TypeWeek,
    handleClick: (e: TypeDay) => void
) => React.FC;

export type TypeRenderRowTable = (
    weeks: any,
    handleClick: (e: TypeDay) => void,
    valueRadio: number
) => React.FC;