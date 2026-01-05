import React, { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);

  const productsArr = [
    {
      id: "2",
      name: "iPhone 15",
      price: "1700",
      stock: "4",
      image: "/images/iphone14.jpg",
    },
    {
      id: "3",
      name: "monitor",
      price: "50000",
      stock: "3",
      image: "/images/monitor.jpg",
    },
    {
      id: "4",
      name: "watch",
      price: "30000",
      stock: "10",
      image: "/images/watch.jpg",
    },
    {
      id: "5",
      name: "mac",
      price: "70000",
      stock: "5",
      image: "/images/mac.jpg",
    },
  ];

  const editBtn = (id) => {
    setCurrent(product.find((item) => item.id === id));
    setShowModal(true);
  };

  const fetchData = async () => {
    setProduct(productsArr);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = async () => {
    fetchData();
    setShowModal(false);
  };

  const deleteProduct = async () => {
    fetchData();
    setModalDelete(false);
  };

  const deleteBtn = () => {
    setModalDelete(true);
  };
  return (
    <>
      <div className="mx-auto bg-white p-5 rounded-xl shadow w-full max-w-[800px] mt-20">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Product List</h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-sm text-center border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-3">Image</th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Quantity</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {product.map((item) => {
                return (
                  <tr className="border-b hover:bg-gray-100" key={item.id}>
                    <td className="p-3">
                      <img
                        src={item.image}
                        className="w-14 h-14 rounded-lg object-cover mx-auto"
                      />
                    </td>
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.price}</td>
                    <td className="p-3">{item.stock}</td>
                    <td className="p-3">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg mr-2"
                        onClick={() => editBtn(item.id)}
                      >
                        Edit
                      </button>

                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                        onClick={() => deleteBtn(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Box Modal For Edit */}

      {showModal && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)] backdrop-blur-md">
          <div className="bg-white max-w-67.5 sm:max-w-87.5 rounded-xl shadow-lg p-6">
            {/* Title */}
            <h3 className="text-lg font-bold mb-4">Edit Product</h3>

            <form className="space-y-3 sm:space-y-4">
              {/* Name */}
              <input
                value={current.name}
                placeholder="Product Name"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setCurrent({ ...current, name: e.target.value })
                }
              />

              {/* Price */}
              <input
                type="text"
                value={current.price}
                placeholder="Price"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setCurrent({ ...current, price: e.target.value })
                }
              />

              {/* Quantity */}
              <input
                type="text"
                value={current.stock}
                placeholder="Quantity"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setCurrent({ ...current, stock: e.target.value })
                }
              />

              {/* Image preview */}
              <div className="flex items-center gap-4">
                <img
                  src={current.image}
                  alt="preview"
                  className="w-[40px] h-[40px] sm:w-20 sm:h-20 object-cover rounded-lg "
                />

                <input
                  placeholder={current.image}
                  className="flex-1 min-w-0 border rounded-lg px-2 py-2
             overflow-hidden text-ellipsis whitespace-nowrap
             focus:outline-none focus:ring focus:ring-green-300"
                />
              </div>

              {/* Actions */}

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                  onClick={handleSave}
                  type="button"
                >
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Box Modal For Delete */}

      {modalDelete && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)]    backdrop-blur-md">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-[270px] sm:max-w-[350px]">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              ِDelete product
            </h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete the product?
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
                onClick={() => deleteProduct()}
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
