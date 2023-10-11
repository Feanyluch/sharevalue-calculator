// Chart.tsx

import ChartComponent from "./ChartComponent"
interface Space {
  id: number;
  name: string;
  type: string;
  size: number;
  location: string;
  monthlyRent: number;
  potentialSavings?: string;
}

function Chart({ spaces }: { spaces: Space[] }) {
  const data = {
    labels: spaces.map((space) => space.name),
    datasets: [
      {
        label: 'Potential Savings',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: '#ffffff',
        borderWidth: 1,
        data: spaces.map((space) => parseFloat(space.potentialSavings || '0')),
      },
    ],
  };

  return (
    <div className="chart-container w-[900px] mx-auto">
      <ChartComponent data={data} />
    </div>
  );
}

export default Chart;