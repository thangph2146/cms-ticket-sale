import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { D, Options, Props } from './config.type';
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ChartPie= (props: Props) => {
    const { children } = props;
    const d: D = {
        labels: ['Vé chưa sử dụng', 'Vé đã sử dụng'],
        datasets: [
            {
                label: ' ',
                data: children,
                backgroundColor: ['#FF8A48', '#4F75FF'],
                borderColor: ['#FF8A48', '#4F75FF'],
            },
        ],
    };
    const options: Options = {
        plugins: {
            legend: false,
            datalabels: {
                display: true,
                align: 'center',
                backgroundColor: '#ffffff',
                borderRadius: 12,
                font: {
                    size: 18,
                },
                boxShadow: '0px 0px 50px rgba(50, 50, 71, 0.25)',
                padding: 12,
            },
        },
    };
    return <Doughnut data={d} options={options} />;
};

export default ChartPie;
