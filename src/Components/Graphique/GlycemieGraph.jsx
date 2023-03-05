import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import {useEffect, useState} from "react";
import GlycemieService from "../../Services/glycemie.service.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
export default function GlycemieGraph(){

    const [dataGlycemie, setDataGlycemie] = useState();

    // useEffect(() => {
    //     const rate = GlycemieService.getRate("2023-02-027", "2023-02-05");
    //     console.log(rate);
    //     if(rate){
    //         setDataGlycemie(rate);
    //     }
    // }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const labels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    const data = {
        labels,
        datasets : [
            {
                label: "Dataset 1",
                data: labels.map(() => dataGlycemie)
            }
        ]
    };

    return(
    <Line options={options} data={data} />
    )
}