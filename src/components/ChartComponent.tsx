import React, { useEffect, useState, RefObject } from 'react';
import { ChartData } from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

interface ChartComponentProps {
  data: ChartData;
}

const ChartComponent: React.FC<ChartComponentProps> = ({ data }) => {
  const [chart, setChart] = useState<ChartJS | null>(null);
  const chartRef: RefObject<HTMLCanvasElement> = React.createRef();

  useEffect(() => {
    let newChart: ChartJS | null = null; // Initialize the newChart variable

    if (chart) {
      chart.destroy(); // Destroy the existing chart if it exists
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        newChart = new ChartJS(ctx, {
          type: 'bar',
          data: data,
        });

        setChart(newChart);
      }
    }

    return () => {
      if (newChart) {
        newChart.destroy(); // Destroy the chart when the component unmounts
      }
    };
  }, [data]);

  return <canvas ref={chartRef} id="myChart" />;
};

export default ChartComponent;
