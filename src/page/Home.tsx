import React, { useEffect, useState } from "react";
import LineChart from "../modules/lineChart/LineChart";
import LineChartDatePicker from "../modules/lineChart/DatePicker";
import PieChartDatePicker from "../modules/pieChart/DatePicker";
import PieChart from "../modules/pieChart/PieChart";
import { data, data2, options, options2 } from "../modules/pieChart/dataPiechart";
import DatePiker from '../modules/DatePiker';


function HomePage() {
    const [state, setState] = useState({
      day: {
          activeDate: 0,
          activeMonth: 0,
          activeYear: 0,
      },
    });
    useEffect(() => {
        const d = new Date();
        setState({
            ...state,
            day: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth(),
                activeYear: d.getFullYear(),
            },
        });
    }, []);
    //==========================================
    const setDay = (date: any, month: any, year: any) => {
        setState({
            ...state,
            day: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };

    return(
        <div className="home-content">
   
            <div className="statistical-content">
              <h1>Thống kê</h1>
              <div className="line-chart">
                <div className="top-line-chart">
                  <h4>Doanh thu</h4>
                    <DatePiker
                        activeDate={state.day}
                        setActiveDate={setDay}
                        module={1}
                    />
                </div>
                <LineChart />
              </div>
              <div className="pie-chart">
                <div className="top-pie-chart">
                  <p>Tổng doanh thu theo tuần</p>
                  <h1>525.145.000</h1>
                  <span>đồng</span>
                </div>
                <div className="content-pie-chart">
                    <DatePiker
                        activeDate={state.day}
                        setActiveDate={setDay}
                        module={1}
                    />
                  <div className="wrapper-pie-chart">
                    <PieChart data_add={data} option={options} />
                  </div>
                  <div className="wrapper-pie-chart">
                    <PieChart data_add={data2} option={options2} />
                  </div>
                  <div className="pie-chart-infor">
                    <div className="item">
                      <div className="rectangle"></div>
                      <p>Vé đã sử dụng</p>
                    </div>
                    <div className="item">
                      <div className="rectangle"></div>
                      <p>Vé chưa sử dụng</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
  
        </div>
    )
}

export default HomePage