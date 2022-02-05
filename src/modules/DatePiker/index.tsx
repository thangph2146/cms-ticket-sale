import { Input } from 'antd';
import dayjs from 'dayjs';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FiCalendar} from 'react-icons/fi'
import TickDatePiker from './DatePiker';
import { State, TypeDay } from './type';
import {Props} from './type'




const DatePiker = (props: any) => {
    const { activeDate, setActiveDate, module } = props;
    const [state, setState] = useState({
        date: 0,
        month: 0,
        year: 0,
        day: 0,
    });
    const [show, setShow] = useState(false);
    const { date, month, year } = state;
    const { activeDate: activeD, activeMonth, activeYear } = activeDate;

    useEffect(() => {
        let dt = new Date();
        setState({
            date: dt.getDate(),
            month: dt.getMonth(),
            year: dt.getFullYear(),
            day: dt.getDay(),
        });
    }, []);



    
    //======================================================
    //===================================================
    // sự kện nút button nhấn next hoặc prev
    const monthPrevNext = (boolean: boolean) => {
        const { month, year } = state;
        if (boolean) {
            setState({
                ...state,
                month: month + 1 > 11 ? 0 : month + 1,
                year: month + 1 > 11 ? year + 1 : year,
            });
        } else {
            setState({
                ...state,
                month: month - 1 < 0 ? 11 : month - 1,
                year: month - 1 < 0 ? year - 1 : year,
            });
        }
    };
    //===========================================================
    //===========================================================
    //===========================================================
    // băt sự kiên chọn ngày và xét lai ngày hiện tại
    const handleClick = (e: TypeDay) => {
        const { number, monthSate } = e;
        if (monthSate + month > 11) {
            setState({
                date: number,
                month: 0,
                year: year + 1,
                day: 0,
            });
            setActiveDate(number, 0, year + 1);
        }
        if (monthSate + month < 0) {
            setState({
                date: number,
                month: 11,
                year: year - 1,
                day: 0,
            });
            setActiveDate(number, 11, year - 1);
        }
        if (monthSate + month >= 0 && monthSate + month <= 11) {
            setState({
                date: number,
                month: month + monthSate,
                year: year,
                day: 0,
            });
            setActiveDate(number, month + monthSate, year);
        }

        setShow(false);
    };
    //=========================================================
    // hàm nút radio
    //====================================================
    const [valueRadio, setValueRadio] = useState(1);
    const onChange = (e: any) => {
        setValueRadio(e.target.value);
    };
    ///================================================
    ///================================================
    ///================================================
    // set giá trị input
    ///================================================
    let inputDate = activeD < 10 ? `0${activeD}` : activeD;
    let inputMonth = activeMonth + 1 < 10 ? `0${activeMonth + 1}` : activeMonth + 1;
    let inputModule3 = `${inputDate}/${inputMonth}/${activeYear}`;
    let inputModule2 = `${inputDate}/${inputMonth}/${activeYear}`;
    let inputModule1 = `Tháng ${activeMonth + 1}, ${activeYear}`;
    let classModule;
    let inputValue;
   
          
    switch (module) {
        case 1:
            inputValue = inputModule1;
            classModule = 'module1';
            break;
        case 2:
            inputValue = inputModule2;
            classModule = 'module2';
            break;
        case 3:
            inputValue = inputModule2;
            classModule = 'module3';
            break;
        case 4:
            inputValue =  inputModule1;
            classModule = 'module4';
            break;
        case 5:
            inputValue = inputModule3;
            classModule = 'module2';
            break;

        default:
            inputValue = inputModule1;
            break;
    }
    //=========================================================
    let classShow = show ? '' : 'd-none';

    //======================================================
    return (
        <div className={`date-piker ${classModule}`}>
            <Input value={inputValue} />
          
            <i onClick={() => setShow(!show)}>
                <FiCalendar />
            </i>
            <div className={classShow}>
                <TickDatePiker
                    state={state}
                    active={activeDate}
                    monthPrevNext={monthPrevNext}
                    handleClick={handleClick}
                    onChange={onChange}
                    valueRadio={valueRadio}
                />
            </div>
        </div>
    );
};

export default DatePiker;

