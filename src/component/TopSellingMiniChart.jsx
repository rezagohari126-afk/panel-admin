import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";

export default function TopSellingMiniChart() {
  const [data, setData] = useState([]);
  

  const topSelling = [
  { id: "1", category: "Phones", sales: 32 },
  { id: "2", category: "Laptops", sales: 21 },
  { id: "3", category: "Accessories", sales: 14 },
  { id: "4", category: "Monitors", sales: 9 },
  { id: "5", category: "TV", sales: 6 }
];


  useEffect(() => {
    const dta = topSelling;
    setData(dta)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-4 rounded-2xl max-w-75 overflow-x-auto">
      {/* <h3 className="text-lg font-semibold mb-3">Top Selling Categories</h3> */}

      <BarChart width={300} height={200} data={data}>
        <XAxis dataKey="category" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip />
        <Bar dataKey="sales" fill="#4F46E5" radius={[6, 6, 0, 0]} />
      </BarChart>
    </div>
  );
}
