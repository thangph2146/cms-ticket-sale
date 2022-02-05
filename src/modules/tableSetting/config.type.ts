export type TypeStatic = 'daSuDung' | 'chuaSuDung' | 'hetHan';

export interface TypeData {
    key: number,
    stt: number,
    maGoi: string,
    tenGoiVe: string,
    ngayApDung: string,
    ngayHetHan: string,
    giaVe: string,
    giaCombo: string,
    tinhTrang: string,
    update: number
};
export interface Props {
    handleModalUpdate:(e:TypeData)=>void
    search:string
    data :Array<TypeData>
}
export interface Column {
    title: string;
    key: string;
    dataIndex: string;
    filteredValue?: Array<string>;
    onFilter?: (value: any, record: TypeData) => boolean;
    render?: (value: any, record: TypeData) => JSX.Element;
}