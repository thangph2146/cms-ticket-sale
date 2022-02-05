//=============================================
// set day start
//=============================================
export const setDayStartSetState = (
    date: number,
    month: number,
    year: number,
    setState: any,
    state: any
) => {
    setState({
        ...state,
        date: {
            ...state.date,
            dayStart: {
                ...state.date.dayStart,
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        },
    });
};
export const setDayEndSetState = (
    date: number,
    month: number,
    year: number,
    setState: any,
    state: any
) => {
    setState({
        ...state,
        date: {
            ...state.date,
            dayEnd: {
                ...state.date.dayEnd,
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        },
    });
};

export const resetState =(setState:any)=>{
    setState({
        date: {
            dayStart: {
                activeDate: 0,
                activeMonth: 0,
                activeYear: 0,
                byDate: 1,
            },
            dayEnd: {
                activeDate: 0,
                activeMonth: 0,
                activeYear: 0,
                byDate: 1,
            },
        },
        tinhTrang: 'chuaSuDung',
    });
}

