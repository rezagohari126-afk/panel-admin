/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

export default function lastOrders() {
  const [lastOrders, setLastOrders] = useState([]);


  const ordersArr = [
  { id: "2", userId: 2, customerName: "Sara Mohammadi", productId: 2, payment: "not paid", productName: "AirPods Pro", total: 8500000, status: "pending", date: "2025-01-13T14:45:00", qty: 2, productImage: "/images/airpod.jpg" },
  { id: "3", userId: 3, customerName: "Reza Gohari", productId: 3, payment: "paid", productName: "MacBook Air M2", total: 48000000, status: "delivered", date: "2025-01-11T17:10:00", qty: 1, productImage: "/images/mac.jpg" },
  { id: "4", userId: 2, customerName: "Sara Mohammadi", productId: 4, payment: "paid", productName: "Samsung Watch 6", total: 12500000, status: "canceled", date: "2025-01-14T08:30:00", qty: 5, productImage: "/images/watch.jpg" },
  { id: "5", userId: 1, customerName: "Ali Rezayi", productId: 5, payment: "not paid", productName: "PlayStation 5", total: 27500000, status: "delivered", date: "2025-01-10T12:50:00", qty: 4, productImage: "/images/playstion.jpg" },
  { id: "6", userId: 4, customerName: "Elham Imani", productId: 6, payment: "paid", productName: "Lenovo", total: 48000000, status: "pending", date: "2025-01-13T20:15:00", qty: 3, productImage: "/images/lenovo.jpg" }
];


  useEffect(() => {
    const fetchData = async () => {
        const data = ordersArr
        const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setLastOrders(sorted.slice(0, 4));
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="bg-white p-5 rounded-xl overflow-x-auto  ">
        <h2 className="text-xl font-semibold text-center mb-4">
          Latest Orders
        </h2>

        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-b-zinc-500">
              <th className="py-2 text-center font-semibold">Product</th>
              <th className="py-2 text-center font-semibold">Customer</th>
              <th className="py-2 text-center font-semibold">Amount</th>
              <th className="py-2 text-center font-semibold">Date</th>
            </tr>
          </thead>

          <tbody className="text-left">
            {lastOrders.map((order) => (
              <tr key={order.id} className="transition hover:bg-gray-50">
                {/* PRODUCT */}
                <td className="py-3 px-2 text-center">
                  <span className="font-medium text-gray-700 whitespace-nowrap">
                    {order.product}
                  </span>
                </td>

                {/* CUSTOMER */}
                <td className="py-3 px-2 text-center text-gray-600 whitespace-nowrap">
                  {order.customer}
                </td>

                {/* AMOUNT */}
                <td className="py-3 px-2 text-center text-gray-700 whitespace-nowrap">
                  ${order.amount}
                </td>

                {/* DATE */}
                <td className="py-3 px-2 text-center text-gray-600 whitespace-nowrap">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
