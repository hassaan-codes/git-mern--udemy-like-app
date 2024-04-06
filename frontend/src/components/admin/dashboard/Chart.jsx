import React from 'react'
import { 
        Chart as ChartJs, 
        CategoryScale, 
        LinearScale, 
        PointElement, 
        LineElement, 
        Title, 
        Tooltip,
        ArcElement,
        Legend
    } from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    Title, 
    Tooltip,
    ArcElement,
    Legend
    );

export const LineChart = () => {
  const labels = getLastYearMonths();

  const options = {
    responsive:true,
    plugins: {
        legend:{
            position:"bottom"
        },
        title:{
            display:true,
            text:"Yearly Views",
        }
    }
  }

  const data = {
    labels,
    datasets:[
        {
            label:"Views",
            data:[1,2,3,4],
            borderColor: 'rgba(107,70, 193, 0.5)',
            backgroundColor: '#6b46c1',
        }
    ]
  };
  
    return (
        <Line options={options} data={data}/>
  )
}


export const DoughnutChart = () => {
    
      const data = {
        labels: ['subscribed', 'not subscribed'],
        datasets:[
            {
                label:"Views",
                data:[3, 20],
                borderColor: ['rgba(62,12,171)', 'rgba(214,43,129)'],
                backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
                borderWidth:1,
            }
        ]
      };
    
    return (
        <Doughnut data={data}/>
    )
}

const getLastYearMonths = () => {
    const labels = [];
    const months = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];

    const currentMonth = new Date().getMonth();
    const remain = 11 - currentMonth;

    for (let i = currentMonth; i >= 0; i--) {
        labels.unshift(months[i]);
    }

    for (let i = 11; i > currentMonth; i--) {
        labels.unshift(months[i]);
    }

    return labels;
}