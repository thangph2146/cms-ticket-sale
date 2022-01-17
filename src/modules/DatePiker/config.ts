import { TypeActive, TypeSate } from './type';

export const tableTitle = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

//=============================================================
//=============================================================
//== function get month and year return day number of the year

export const dataMonth = (month: number, year: number) => {
    const isCheck = (year: number) => {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    };
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31;
        case 3:
        case 5:
        case 8:
        case 10:
            return 30;
        case 1:
            if (isCheck(year)) {
                return 29;
            } else {
                return 28;
            }
        default:
            return -1;
    }
};

//=============================================================
//=============================================================
//== function add day into list of week

export const arrayMonth = (state: TypeSate, active: TypeActive) => {
    let i = 1,
        t2 = [],
        t3 = [],
        t4 = [],
        t5 = [],
        t6 = [],
        t7 = [],
        cn = [];
    const { month, year, date } = state;
    const { activeMonth, activeYear, activeDate } = active;
    //==================================================
    //========================= add day and month into list of week=========================
    //==================================================

    const soDate = dataMonth(month, year);
    for (i = 1; i <= soDate; i++) {
        const d = new Date(year, month, i);
        let day = d.getDay();
        let dy = {};
        if (activeDate === i && activeMonth === month && activeYear === year) {
            dy = {
                monthSate: 0,
                number: i,
                active: 1,
            };
        } else {
            dy = {
                monthSate: 0,
                number: i,
                active: 0,
            };
        }

        switch (day) {
            case 0: {
                cn.push(dy);
                break;
            }
            case 1: {
                t2.push(dy);
                break;
            }
            case 2: {
                t3.push(dy);
                break;
            }
            case 3: {
                t4.push(dy);
                break;
            }
            case 4: {
                t5.push(dy);
                break;
            }
            case 5: {
                t6.push(dy);
                break;
            }
            case 6: {
                t7.push(dy);
                break;
            }

            default:
                break;
        }
    }

    //================================================
    //======================add day and month prev into list of week==========================
    //================================================

    let mothPrev = month - 1 < 0 ? 11 : month - 1;
    let yearPrev = month - 1 < 0 ? year - 1 : year;
    const dataMonthPrev = dataMonth(mothPrev, yearPrev);
    const dPrev = new Date(yearPrev, mothPrev, dataMonthPrev);
    let dayPrev = dPrev.getDay();
    if (dayPrev > 0) {
        i = dataMonthPrev - dayPrev + 1;
        for (i; i <= dataMonthPrev; i++) {
            const dPrev = new Date(yearPrev, mothPrev, i);
            dayPrev = dPrev.getDay();
            let dyPrev = {
                monthSate: -1,
                number: i,
                active: 0,
            };
            switch (dayPrev) {
                case 0: {
                    cn.unshift(dyPrev);
                    break;
                }
                case 1: {
                    t2.unshift(dyPrev);
                    break;
                }
                case 2: {
                    t3.unshift(dyPrev);
                    break;
                }
                case 3: {
                    t4.unshift(dyPrev);
                    break;
                }
                case 4: {
                    t5.unshift(dyPrev);
                    break;
                }
                case 5: {
                    t6.unshift(dyPrev);
                    break;
                }
                case 6: {
                    t7.unshift(dyPrev);
                    break;
                }

                default:
                    break;
            }
        }
    }
    //============================================
    //===================add day and month into list of week=========================
    //============================================
    let mothNext = month + 1 > 11 ? 0 : month + 1;
    let yearNext = month + 1 > 11 ? year + 1 : year;
    const dNext = new Date(yearNext, mothNext, 1);
    let dayNext = dNext.getDay();
    i = 1;
    for (i; i <= 6; i++) {
        const dnext = new Date(yearNext, mothNext, i);
        let dayNext = dnext.getDay();
        if (dayNext === 1) {
            break;
        }
        let dyNext = {
            monthSate: 1,
            number: i,
            actve: 0,
        };
        switch (dayNext) {
            case 0: {
                cn.push(dyNext);
                break;
            }
            case 1: {
                t2.push(dyNext);
                break;
            }
            case 2: {
                t3.push(dyNext);
                break;
            }
            case 3: {
                t4.push(dyNext);
                break;
            }
            case 4: {
                t5.push(dyNext);
                break;
            }
            case 5: {
                t6.push(dyNext);
                break;
            }
            case 6: {
                t7.push(dyNext);
                break;
            }

            default:
                break;
        }
    }

    let weeks = [];
    let t2L = t2.length,
        week = [];
    if (
        t2.length === t3.length &&
        t2.length === t4.length &&
        t2.length === t5.length &&
        t2.length === t6.length &&
        t2.length === t7.length &&
        t2.length === cn.length
    ) {
        for (i = 0; i < t2L; i++) {
            week = [t2[i], t3[i], t4[i], t5[i], t6[i], t7[i], cn[i]];
            weeks.push(week);
        }
    }

    return weeks;
};