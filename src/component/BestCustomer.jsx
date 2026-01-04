import { useEffect, useState } from "react";

export default function BestCustomer() {
  const [customer, setCustomer] = useState(null);
  const bestCustomer = {
  id: 1,
  name: "Ali Rezayi",
  email: "ali@gmail.com",
  avatar: "/images/bestCustomer.jpg",
  totalOrders: 12,
  totalSpent: 125000000,
  lastOrderDate: "2025-01-15T10:20:00"
};


  useEffect(() => {
   const data = bestCustomer
   setCustomer(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!customer) return null;

  return (
    <div className="bg-white rounded-xl shadow p-5 w-full max-w-95">
      <h2 className="text-lg font-bold mb-4">Best Customer</h2>

      <div className="flex items-center gap-4">
        <img
          src={customer.avatar}
          alt={customer.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="font-semibold text-gray-800">{customer.name}</span>
          <span className="text-sm text-gray-500">{customer.email}</span>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
        <div className="bg-gray-100 rounded-lg p-3 text-center">
          <p className="font-semibold">{customer.totalOrders}</p>
          <p className="text-gray-500 text-xs">Orders</p>
        </div>

        <div className="bg-gray-100 rounded-lg p-3 text-center">
          <p className="font-semibold text-[10px] lg:text-base ">
            {customer.totalSpent.toLocaleString()}
          </p>
          <p className="text-gray-500 text-xs">Total Spent</p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4 text-center">
        Last order:{" "}
        {new Date(customer.lastOrderDate).toLocaleDateString("en-US")}
      </p>
    </div>
  );
}
