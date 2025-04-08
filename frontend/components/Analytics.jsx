
import NavBar from './NavBar'

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
   CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend 
);


export default function Analytics(){
    const options = {};
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Dataset 1",
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
            },
        ],
    };
    return (
        <>
        <NavBar/>
        <div className= "chart w-256 h-96">
        <Line options={options} data={data} />
        </div>
        </>
    )
}