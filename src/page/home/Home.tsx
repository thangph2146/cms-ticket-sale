import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../modules/title/Title';
import HomePieChart from './HomePieChart';
import HomeLineChart from './HomeLineChart';
import { StateLine, StatePie } from './home.type';
const Home: React.FC = () => {
    //========================================
    // state reducer get data home page from realtime data
    //========================================
    const dataHome = useSelector((state: any) => state.dataFirebase.home);
    //========================================
    // state home Line Chart
    //========================================
    const [stateLine, setStateLine] = useState<StateLine>({
        dayLine: {
            activeDate: 1,
            activeMonth: 0,
            activeYear: 2022,
        },
        line: {
            byDay: 1,
            data: [],
        },
        danhThu: 0,
    });
    //========================================
    // state home Pie Chart
    //========================================
    const [statePie, setStatePie] = useState<StatePie>({
        dayPie: {
            activeDate: 1,
            activeMonth: 0,
            activeYear: 2022,
        },
        pie: {
            byDay: 1,
            dataEvent: [],
            dataFamily: [],
        },
    });
    //========================================
    // component start
    //========================================
    useEffect(() => {
        const d: Date = new Date();
        setStateLine({
            ...stateLine,
            dayLine: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth(),
                activeYear: d.getFullYear(),
            },
        });
        setStatePie({
            ...statePie,
            dayPie: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth(),
                activeYear: d.getFullYear(),
            },
        });
    }, []);

    //==========================================
    // chart line
    //==========================================
    const setDayLine = (date: number, month: number, year: number) => {
        setStateLine({
            ...stateLine,
            dayLine: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };
    //==========================================
    // radio dayLine
    //==========================================
    const setRadioLine = (number: number) => {
        setStateLine({
            ...stateLine,
            line: {
                ...stateLine.line,
                byDay: number,
            },
        });
    };
    //==========================================
    // chart pie
    //==========================================
    const setDayPie = (date: number, month: number, year: number) => {
        setStatePie({
            ...statePie,
            dayPie: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };
    //==========================================
    // radio dayPie
    //==========================================
    const setRadioPie = (number: number) => {
        setStatePie({
            ...statePie,
            pie: {
                ...statePie.pie,
                byDay: number,
            },
        });
    };
    //===============================================
    return (
        <div id="home" className="home-content">
            {/* title home */}
            <Title children={'Thống kê'} />
            {/* home top */}
            <HomeLineChart
                state={stateLine}
                setState={setStateLine}
                setDayLine={setDayLine}
                setRadioLine={setRadioLine}
                dataHome={dataHome}
            />

            <div className="home-chart-pie">
                <HomePieChart
                    state={statePie}
                    dataHome={dataHome}
                    setDayPie={setDayPie}
                    setRadioPie={setRadioPie}
                    setState={setStatePie}
                />
            </div>
        </div>
    );
};

export default Home;
