import { Area } from '@ant-design/plots';
import React from 'react';
import { Config, Props } from './config.type';
const ChartArea = (props: Props) => {
    const { data } = props;
    const config: Config = {
        data: data,
        xField: 'date',
        yField: 'revenue',
        meta: {
            revenue: {
                min: 140,
                max: 260,
                formatter: (v: any) => `${v}tr`,
            },
        },
        xAxis: {
            range: [0, 1],
            tickCount: 6,
        },
        yAxis: {
            tickCount: 3,
        },
        areaStyle: {
            fill: 'l(270) 0:#ffffff  1:#faa05f42',
        },
        line: {
            color: '#FF993C',
            size: 4,
        },
        smooth: true,
        theme: 'default',
    };

    return <Area {...config} />;
};

export default ChartArea;
