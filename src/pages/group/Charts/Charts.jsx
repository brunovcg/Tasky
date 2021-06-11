import { useEffect } from 'react';
import { useState } from 'react';
import { Doughnut, Line } from 'react-chartjs-2';


  
  export const PieChart = () => {
      const [chartData, setChartData] = useState({})

        const chart = () => {
            setChartData({
                labels:[],
                datasets:[
                    {
                        label: "Taskys Status",
                        data:[90,10],
                        backgroundColor:[
                            '#42b1dc',
                            '#f20505'
                        ],
                        borderWidth:1,
                    }
                ]
            })
        }

        useEffect(()=> {chart()},[])


    return(
        <div className="chartBox">
            <Doughnut data={chartData} options={{
                    plugins: {
                    legend: {
                        labels:{
                            color: '#ffffff',
                            boxWidth: 10

                        },
                        maxWidth:20
                    }
                }
               
            }}/>
        </div>
    )
  };
  
  export default PieChart;
  