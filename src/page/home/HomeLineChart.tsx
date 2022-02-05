import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import ChartArea from '../../modules/chartLine/ChartLine';
import DatePiker from '../../modules/DatePiker';
import { PropsHomeLineChart, DataLine } from './home.type';
const HomeLineChart = (props: PropsHomeLineChart) => {
    //================================================
    // props
    //================================================
    const { state, setDayLine, setRadioLine, dataHome, setState } = props;

    //================================================
    // set dataHome vào state
    //================================================
    const setDataLine = (dataDay: Array<Array<DataLine>>) => {

        let dataDayLine: Array<DataLine> = dataDay[0];
        let TotalPrice: number = dataHome.danhThu[0];
        setState({
            ...state,
            line: {
                ...state.line,
                data: dataDayLine,
            },
            danhThu: TotalPrice,
        });
    };
    //================================================
    // side effect
    //================================================
    const isUseEffect = [
        state.dayLine.activeDate,
        state.dayLine.activeMonth,
        state.dayLine.activeYear,
        state.line.byDay,
        dataHome?.chartLine?.dataWeek,
        dataHome?.chartLine?.dataDay,
    ];
    useEffect(() => {
        let boolean: boolean =
            dataHome?.chartLine?.dataWeek && dataHome?.chartLine?.dataDay;
        if (boolean) {
            if (state.line.byDay === 1) {
                const dataDay: Array<Array<DataLine>> =
                    dataHome.chartLine.dataDay;
                setDataLine(dataDay);
            } else {
                const dataDay: Array<Array<DataLine>> =
                    dataHome.chartLine.dataWeek;
                setDataLine(dataDay);
            }
        }
    }, isUseEffect);
    return (
        <div>
            <Row justify="space-between" className="home-top">
                <Col>
                    <span className="text">Danh thu</span>
                </Col>
                <Col>
                    {' '}
                    <DatePiker
                        activeDate={state.dayLine}
                        setActiveDate={setDayLine}
                        valueRadio={state.line.byDay}
                        setValueRadio={setRadioLine}
                        module={1}
                    />
                </Col>
            </Row>
            {/* chart area */}
            <div className="home-chart-area">
                <ChartArea data={state.line.data} />
                <div className="text">
                    <span className="sub-text">Tổng doanh thu theo tuần</span>
                    <div className="price">
                        <span className="number">{state.danhThu}</span>
                        <span className="vnd">đồng</span>
                    </div>
                </div>
            </div>
            {/* chart pie */}
        </div>
    );
};

export default HomeLineChart;
