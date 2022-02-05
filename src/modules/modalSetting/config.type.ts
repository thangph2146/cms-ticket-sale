export interface DataSetting {
    key: number;
    stt: number;
    maGoi: string;
    tenGoiVe: string;
    ngayApDung: string;
    ngayHetHan: string;
    giaVe: string;
    giaCombo: string;
    tinhTrang: string;
    update: number;
}
export interface PropsModalSetting {
    isModal: boolean;
    handleModalClose: () => void;
    dataSetting: Array<DataSetting>;
    isUpdate: boolean;
    dataUpdate: any;
}
export interface State {
    date: {
        dayStart: {
            activeDate: number;
            activeMonth: number;
            activeYear: number;
            byDate: number;
        };
        dayEnd: {
            activeDate: number;
            activeMonth: number;
            activeYear: number;
            byDate: number;
        };
    };
    tinhTrang: 'chuaSuDung' | 'hetHan';
}
export interface PropsModalSettingDate {
    state: State;
    setDayStart:(date: number, month: number, year: number)=>void;
    setDayEnd:(date: number, month: number, year: number)=>void;
  
    messageDate:boolean;
}
export interface PropsModalSettingPrice {
    form:any, messagePrice:boolean
}
export interface ModalSettingPriceChecked {
    priceDefault: boolean,
        priceCombo: boolean,
}
export interface ModalSettingPriceCombo {
    price: boolean,
        per: boolean,
}
export interface ModalSettingPriceMessage {
    priceDefault: boolean,
    priceCombo: boolean,
    per: boolean,
}
export interface PropsModalSettingTinhTrang {
    state:State,
     setState:React.Dispatch<React.SetStateAction<State>>
}

