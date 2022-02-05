import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import { arrayMonth } from './config';
import Table from './Table';
import { TypePropsTickDatePiker } from './type';
const DatePiker = (props: TypePropsTickDatePiker) => {
    const { state, monthPrevNext, handleClick, active, onChange, valueRadio } =
        props;

    const [weeks, setWeeks] = useState(arrayMonth(state, active));
    const isUseEffect:Number[] = [state.month, state.year, state.date];
    useEffect(() => {
        setWeeks(arrayMonth(state, active));
    }, isUseEffect); // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className="date-piker-content">
            <div className="month">
                <button onClick={() => monthPrevNext(false)}>
                    {' '}
                    <LeftOutlined twoToneColor="#1E0D03" />
                </button>
                <span className="text">
                    Tháng {state.month + 1}, {state.year}
                </span>
                <button onClick={() => monthPrevNext(true)}>
                    {' '}
                    <RightOutlined twoToneColor="#1E0D03" />
                </button>
            </div>
            <div className="radio">
                <Radio.Group onChange={onChange} value={valueRadio}>
                    <Radio value={1}>Theo ngày</Radio>
                    <Radio value={2}>Theo tuần</Radio>
                </Radio.Group>
            </div>
            <Table
                weeks={weeks}
                handleClick={handleClick}
                valueRadio={valueRadio}
            />
        </div>
    );
};

export default DatePiker;
