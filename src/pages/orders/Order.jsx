import React, { useState, useEffect } from "react";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [showViewMol, setShowViewModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);
  
  const ordersArr = [
    {
      id: "2",
      userId: 2,
      customerName: "Sara Mohammadi",
      productId: 2,
      payment: "not paid",
      productName: "AirPods Pro",
      total: 8500000,
      status: "pending",
      date: "2025-01-13T14:45:00",
      qty: 2,
      productImage: "/images/airpod.jpg",
    },
    {
      id: "3",
      userId: 3,
      customerName: "Reza Gohari",
      productId: 3,
      payment: "paid",
      productName: "MacBook Air M2",
      total: 48000000,
      status: "delivered",
      date: "2025-01-11T17:10:00",
      qty: 1,
      productImage: "/images/mac.jpg",
    },
    {
      id: "4",
      userId: 2,
      customerName: "Sara Mohammadi",
      productId: 4,
      payment: "paid",
      productName: "Samsung Watch 6",
      total: 12500000,
      status: "canceled",
      date: "2025-01-14T08:30:00",
      qty: 5,
      productImage: "/images/watch.jpg",
    },
    {
      id: "5",
      userId: 1,
      customerName: "Ali Rezayi",
      productId: 5,
      payment: "not paid",
      productName: "PlayStation 5",
      total: 27500000,
      status: "delivered",
      date: "2025-01-10T12:50:00",
      qty: 4,
      productImage: "/images/playstion.jpg",
    },
    {
      id: "6",
      userId: 4,
      customerName: "Elham Imani",
      productId: 6,
      payment: "paid",
      productName: "Lenovo",
      total: 48000000,
      status: "pending",
      date: "2025-01-13T20:15:00",
      qty: 3,
      productImage: "/images/lenovo.jpg",
    },
  ];

  const fetchData = async () => {
    setOrders(ordersArr);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const viewBtn = (id) => {
    setCurrentOrder(orders.find((item) => item.id === id));
    setShowViewModal(true);
  };

  const deleteOrder = async () => {

    fetchData();
    setModalDelete(false);
  };

  return (
    <>
      <div className="mx-auto bg-white p-5 rounded-xl shadow w-full max-w-200 mt-20">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Orders</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-sm text-center border-collapse">
            <thead>
              <tr className="bg-indigo-600 text-white">
                <th className="p-3">Order ID</th>
                <th className="p-3">Total</th>
                <th className="p-3">Date</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="p-3 font-semibold">#{order.id}</td>

                  <td className="p-3 font-semibold">
                    {order.total.toLocaleString()}
                  </td>

                  <td className="p-3 text-xs text-gray-500">
                    {new Date(order.date).toLocaleDateString("en-US")}
                  </td>

                  <td className="p-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          viewBtn(order.id);
                        }}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg"
                      >
                        View
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                        onClick={() => setModalDelete(true)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal View */}

      {showViewMol && currentOrder && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)] backdrop-blur-md">
          <div className="bg-white w-75 sm:w-87.5 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold mb-4">Order #{currentOrder.id}</h3>

            {/* Product */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={currentOrder.productImage}
                alt={currentOrder.productName}
                className="w-20 h-20 rounded-lg object-cover"
              />

              <div>
                <p className="font-semibold">{currentOrder.productName}</p>
                <p className="text-sm text-gray-600">Qty: {currentOrder.qty}</p>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p>
                <strong>Customer:</strong> {currentOrder.customerName}
              </p>
              <p>
                <strong>Total:</strong> {currentOrder.total}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(currentOrder.date).toLocaleString("en-US")}
              </p>
            </div>

            {/* Status & Payment */}
            <div className="flex gap-2 mb-6">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
          ${
            currentOrder.payment === "paid"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
              >
                {currentOrder.payment}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold
          ${
            currentOrder.status === "delivered"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
              >
                {currentOrder.status}
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Box Modal Delete */}

      {modalDelete && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)]    backdrop-blur-md">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-67.5 sm:max-w-87.5">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              ِDelete Order
            </h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete the order?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                onClick={() => setModalDelete(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                onClick={() => deleteOrder()}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
