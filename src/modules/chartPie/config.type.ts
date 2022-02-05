export interface Props {
    children:Number[]
}
export interface D {
    labels: String[],
    datasets: [
        {
            label: string,
            data: Number[],
            backgroundColor:String[] |any ,
            borderColor: String[] |any,
        },
    ],
}
export interface Options{
    plugins: {
        legend: any,
        datalabels: {
            display: boolean,
            align:  any ,
            backgroundColor: string,
            borderRadius: number,
            font: {
                size: number,
            },
            boxShadow: string,
            padding: number,
        },
    },
}