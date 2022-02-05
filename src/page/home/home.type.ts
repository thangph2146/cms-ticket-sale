export interface DataLine {
    date: string;
    revenue: number;
}
export interface StateLine {
    dayLine: {
        activeDate: number;
        activeMonth: number;
        activeYear: number;
    };
    line: {
        byDay: number;
        data: [] | Array<DataLine>;
    };
    danhThu: number;
}
export interface StatePie {
    dayPie: {
        activeDate: number;
        activeMonth: number;
        activeYear: number;
    };
    pie: {
        byDay: number;
        dataEvent: Array<number>;
        dataFamily: Array<number>;
    };
}
//===========================================
// home top
//===========================================
export interface PropsHomeLineChart {
    state: StateLine;
    setDayLine: (date: number, month: number, year: number) => void;
    setRadioLine: (number: number) => void;
    dataHome: any;
    setState: React.Dispatch<React.SetStateAction<StateLine>>;
}
//===========================================
// home bottom
//===========================================
export interface PropsHomePieChart {
    state: StatePie;
    setDayPie: (date: number, month: number, year: number) => void;
    setRadioPie: (number: number) => void;
    dataHome: any;
    setState: React.Dispatch<React.SetStateAction<StatePie>>;
}
export interface DataChartPie {
    event: Array<number>;
    family: Array<number>;
}
