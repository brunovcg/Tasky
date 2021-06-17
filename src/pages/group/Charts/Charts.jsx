import { useEffect } from 'react';
import { useState } from 'react';
import { Doughnut} from 'react-chartjs-2';


  
  export const PieChart = ({doneData, todoData}) => {
      const [chartData, setChartData] = useState({})

        const chart = () => {
            setChartData({
                labels:[],
                datasets:[
                    {
                        label: "Taskys Status",
                        data:[todoData,doneData],
                        backgroundColor:[
                            '#ff8484',
                            '#42b1dc'
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
  