import React from "react";
import NavBar from "../../component/navBar";
import TodayBox from "../../component/todayBox";
import UsersTable from "../../component/UsersTable";
import LastOrdersTable from "../../component/LastOrdersTable";
import SimpleAreaChart from "../../component/SimpleAreaChart";
import MiniRevenueChart from "../../component/MiniRevenueChart";
import TopSellingMiniChart from "../../component/TopSellingMiniChart";
import BestCustomer from "../../component/BestCustomer";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [today, setToday] = useState([]);
  
  const toDayArr = [
  { id: "1", productName: "Laptop ASUS", count: "5", img: "/images/asus.jpg", inventory: "6" },
  { id: "2", productName: "iPhone 15", count: "12", img: "/images/iphone14.jpg", inventory: "2" },
  { id: "3", productName: "Samsung Monitor 27", count: "3", img: "/images/monitor.jpg", inventory: "4" }
];


  useEffect(() => {
    const fetchData = async () => {
     setToday(toDayArr)
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className=" px-4 md:px-6 mt-15 ">
        {/*  Last Orders و Top Selling */}
        <div className="flex flex-col lg:flex-row mb-20 flex-wrap gap-5 overflow-x-auto">
          <div className="flex-1 flex flex-col gap-4 overflow-x-auto ">
            <h1 className="text-lg md:text-2xl font-semibold">Last orders</h1>
            <LastOrdersTable />
          </div>

          <div className=" flex flex-col gap-4">
            <h2 className="text-lg md:text-2xl font-semibold">Top selling</h2>
            <TopSellingMiniChart />
          </div>
        </div>

        {/*  Today`s sales و Last Users */}
        <div className="flex flex-col md:flex-row mb-15 gap-7 lg:gap-20 mt-6 overflow-x-auto">
          <div className=" flex flex-col gap-4">
            <h2 className="text-lg md:text-2xl font-semibold">Today`s sales</h2>
            <div className="flex  flex-wrap gap-3">
              {today.map((item) => (
                <div key={item.id} className="">
                  <TodayBox
                    key={item.id}
                    src={item.img}
                    productName={item.productName}
                    count={item.count}
                    inventory={item.inventory}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col mt-6 md:mt-0">
            <h1 className="text-lg md:text-2xl font-semibold mb-5">
              Last users
            </h1>

            <UsersTable />
          </div>
        </div>

        {/* Today's Revenue , Best customer */}
        <div className="flex flex-col md:flex-row  lg:flex-row gap-12 md:gap-32.5 lg:gap-75 mb-15 mt-6">
          <div className="">
            <h2 className="text-lg md:text-2xl font-semibold">
              Today's revenue
            </h2>
            <div className="w-75 overflow-x-auto">
              <MiniRevenueChart />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <h2 className="text-lg md:text-2xl font-semibold">Best customer</h2>
            <BestCustomer></BestCustomer>
          </div>
        </div>

        {/* Sales this year */}
        <div className="flex flex-col gap-4 mt-6 mb-6">
          <h1 className="text-lg md:text-2xl font-semibold">Sales this year</h1>
          <div className="w-full overflow-x-auto">
            <SimpleAreaChart />
          </div>
        </div>
      </div>
    </>
  );
}
