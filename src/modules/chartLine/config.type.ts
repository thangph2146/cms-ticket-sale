export interface Props {
    data:Array<DT>
}
export interface DT {
    date: string,
     revenue: number
}
export interface Config {
    data: Array<DT>,
    xField: string,
    yField: string,
    meta: {
        revenue: {
            min: number,
            max: number,
            formatter: (v: string) =>string,
        },
    },
    xAxis: {
        range: [0, 1],
        tickCount: number,
    },
    yAxis: {
        tickCount: number,
    },
    areaStyle: {
        fill: string,
    },
    line: {
        color: string,
        size: number,
    },
    smooth: boolean,
    theme: string,
}
