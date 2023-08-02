import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js/auto'; // Fix the import path here
import { Scatter } from 'react-chartjs-2';
import dayjs from 'dayjs';
import { Height } from '@mui/icons-material';
import { toPlotFormat } from './dataProcessing';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function getRandomDate() {
  const startDate = new Date('2023-04-01'); // Set the start date
  const endDate = new Date(); // Set the end date to today (current date)
  const randomTimestamp =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime());

  const randomDate = new Date(randomTimestamp);
  return randomDate;
}
export default function ScatterPlot(plotData) {
  const datasetLabel = ['A dataset', 'B dataset']; //TODO: input props
  const datasetPointColor = [
    'rgba(255, 99, 132, 1)',
    'rgba(53, 162, 235, 0.5)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
  ];

  const datasets = toPlotFormat(plotData.plotData, datasetPointColor);
  // console.log(datasets);
  // console.log(dayjs(getRandomDate()));

  const options = {
    responsive: true,
    // aspectRatio: 1,
    plugins: {
      title: {
        display: true,
        text: '訓練Volumn = 重量x次數x組數',
        font: { size: 20 },
      },
      legend: {
        position: 'top',
        // padding: {
        //   top: 10,
        //   bottom: 30,
        // },
        labels: {
          font: {
            size: 18,
          },
        },
      },
      tooltip: {
        callbacks: {
          title: (context) => {
            // const datasetIndex = context[0].datasetIndex;
            // console.log(context[0].dataset.label);
            return context[0].dataset.label || '';
          },
          label: (context) => {
            // console.log(context);
            return `Value: ${context.parsed.y}, Date: ${dayjs(
              context.parsed.x
            ).format('YYYY-MM-DD')}`;
          },
        },
        titleFont: {
          size: 25, // Set the tooltip title font size
        },

        bodyFont: {
          size: 25, // Set the tooltip font size
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (value, index, ticks) {
            return dayjs(value).format('YYYY-MM-DD');
          },
          // color: "red",
          font: {
            size: 20,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 20,
          },
        },
      },
    },
  };

  const data = {
    // TODO: objects of x,y array
    datasets: datasets,
  };
  // console.log(dayjs(getRandomDate()), dayjs("2022-05-05"));
  return <Scatter options={options} data={data} />;
}
