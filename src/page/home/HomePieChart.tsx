import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import ChartPie from '../../modules/chartPie/ChartPie';
import DatePiker from '../../modules/DatePiker';
import { PropsHomePieChart, DataChartPie } from './home.type';
const HomePieChart = (props: PropsHomePieChart) => {

    const { state, setDayPie, setRadioPie, dataHome, setState } = props;

    // set data vào state
    //================================================
    const setDataPie = (chartPie: Array<DataChartPie>) => {
   
        let dataChartPie: DataChartPie = chartPie[0];
        setState({
            ...state,
            pie: {
                ...state.pie,
                dataEvent: dataChartPie.event,
                dataFamily: dataChartPie.family,
            },
        });
    };
    //================================================
    // side effect
    //================================================
    const isUseEffect = [
        state.dayPie.activeDate,
        state.dayPie.activeMonth,
        state.dayPie.activeYear,
        state.pie.byDay,
        dataHome?.chartPie,
    ];
    useEffect(() => {
        let bl: boolean = dataHome?.chartPie;
        if (bl) {
            setDataPie(dataHome.chartPie);
        }
    }, isUseEffect);
    return (
        <div>
            <Row>
                <Col span={5} className="home-chart-pie-piker">
                    <DatePiker
                        activeDate={state.dayPie}
                        setActiveDate={setDayPie}
                        valueRadio={state.pie.byDay}
                        setValueRadio={setRadioPie}
                        module={1}
                    />
                </Col>
                <Col span={6} className="home-chart-pie-content">
                    <div>
                        {' '}
                        <span> Gói gia đình</span>
                    </div>
                    <div>
                        {' '}
                        <ChartPie children={state.pie.dataEvent} />
                    </div>
                </Col>
                <Col span={6} className="home-chart-pie-content">
                    <div>
                        {' '}
                        <span> Gói sự kiện</span>
                    </div>
                    <div>
                        {' '}
                        <ChartPie children={state.pie.dataFamily} />
                    </div>
                </Col>
                <Col span={6} className="home-chart-pie-legend">
                    <div className="home-chart-pie-legend-content">
                        <span className="color color1"></span>
                        <span className="text">Vé đã sử dụng</span>
                    </div>
                    <div className="home-chart-pie-legend-content">
                        <span className="color color2"></span>
                        <span className="text">Vé chưa sử dụng</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default HomePieChart;
