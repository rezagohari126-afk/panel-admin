import { LineChart, Line, XAxis, Tooltip } from "recharts";
import React , {useState,useEffect} from "react";

const MiniRevenueChart = () => {

const [data,setData] = useState([]);


const revenue = [
  { hour: "08:00", revenue: 120, id: "b3a9" },
  { hour: "09:00", revenue: 260, id: "4876" },
  { hour: "10:00", revenue: 310, id: "2078" },
  { hour: "11:00", revenue: 450, id: "2da5" },
  { hour: "12:00", revenue: 520, id: "d718" },
  { hour: "13:00", revenue: 610, id: "f665" },
  { hour: "14:00", revenue: 780, id: "5eba" },
  { hour: "15:00", revenue: 830, id: "7ded" },
  { hour: "16:00", revenue: 920, id: "db28" },
  { hour: "17:00", revenue: 990, id: "3bbd" }
];


useEffect(() => {
  const fetchData =  () => {
    const dta = revenue
    setData(dta)
  }

  fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  return (
    <div className="w-full h-35">
      <LineChart 
        width={300} 
        height={140} 
        data={data}
        margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
      >
        <XAxis dataKey="hour" hide />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#4f46e5"
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </div>
  );
};

export default MiniRevenueChart;
