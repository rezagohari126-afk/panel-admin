import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import React , {useState,useEffect} from 'react';

const SimpleAreaChart = () => {

  const [data,setData] = useState([]);


  const sales = [
  { month: "January", total: 15000, id: "363e" },
  { month: "February", total: 18000, id: "671c" },
  { month: "March", total: 12000, id: "37a0" },
  { month: "April", total: 20000, id: "3c07" },
  { month: "May", total: 22000, id: "c6ae" },
  { month: "June", total: 19500, id: "5940" },
  { month: "July", total: 25000, id: "76d0" },
  { month: "August", total: 27000, id: "a888" },
  { month: "September", total: 23000, id: "4410" },
  { month: "October", total: 26000, id: "7379" },
  { month: "November", total: 24000, id: "240b" },
  { month: "December", total: 30000, id: "a14f" }
];


  useEffect(() => {
    const fetchData =  () => {
      const dta = sales
      setData(dta)
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className=" overflow-x-auto">
      <AreaChart
        width={900}          
        height={300}         
        data={data}
        margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis  tickCount={12}/>
        <Tooltip />
        <Area type="monotone" dataKey="total" stroke="#00D123" fill="#B8FFC3" />
      </AreaChart>
    </div>
  );
};

export default SimpleAreaChart;
