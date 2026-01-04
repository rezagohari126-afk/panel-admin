import React, { useState, useEffect } from "react";

export default function Users() {

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  // const [idUser, setIdUser] = useState(null);
  const [modalAdd, setModalAdd] = useState(false);
  const [newUser,setNewUser] = useState({
    id:`${users.length}`,
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  })

  const usersArr = [
  { id: "1", firstName: "Alir", lastName: "Rezayi", email: "ali@example.com", role: "User" },
  { id: "2", firstName: "Sara", lastName: "Mohammadi", email: "sara@example.com", role: "user" },
  { id: "4", firstName: "hashem", lastName: "asghari", email: "hashem@example.com", role: "user" },
  { id: "5", firstName: "mehran", lastName: "kiani", email: "mehran@example.com", role: "admin" },
  { id: "6", firstName: "Reza", lastName: "Gohari", email: "reza@example.com", role: "manager" }
];


  const fetchData = async () => {
    setUsers(usersArr);
  };
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const editBtn = (id) => {
    setCurrentUser(users.find((item) => item.id === id));
    setShowEditModal(true);
  };

  const editHandle = async () => {
    fetchData();
    setShowEditModal(false);
  };

  const deleteUsers = async () => {

    fetchData();
    setModalDelete(false);
  };

  const deleteBtn = () => {
    setModalDelete(true);
  };

  const handleAddUser = async () => {
    fetchData();
    setModalAdd(false);
  }

  return (
    <>
      <div className="mx-auto bg-white p-5 rounded-xl shadow w-full max-w-200 mt-20 mb-14">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base sm:text-xl font-bold text-gray-800">Users List</h2>

          <button className="flex items-center text-[14px] sm:text-base gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg"
          onClick={() => setModalAdd(true)}
          >
            <span className="text-[14px] sm:text-lg font-bold">+</span>
            Add User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-sm text-center border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-3">Avatar</th>
                <th className="p-3">Name</th>
                <th className="p-3">LastName</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">
                    <img
                      src="/images/avatar.jpg"
                      alt="avatar"
                      className="w-12 h-12 rounded-full object-cover mx-auto"
                    />
                  </td>

                  <td className="p-3">{user.firstName}</td>
                  <td className="p-3">{user.lastName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>

                  <td className="p-2 sm:p-1.5 md:p-2.5">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white text-[11px] sm:text-[12px] px-2 py-px sm:px-1.75 sm:py-0.75 lg:text-base lg:px-3 lg:py-1 rounded-lg mr-1 sm:mr-[5px] lg:mr-2"
                      onClick={() => editBtn(user.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 hover:bg-red-600 text-white text-[11px] sm:text-[12px] px-2 py-px sm:px-1.5 sm:py-0.75 lg:text-base lg:px-3 lg:py-1 rounded-lg"
                      onClick={() => deleteBtn(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Box Modal For Edit */}

      {showEditModal && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)] backdrop-blur-md">
          <div className="bg-white max-w-[270px] sm:max-w-[350px] rounded-xl shadow-lg p-6">
            {/* Title */}
            <h3 className="text-lg font-bold mb-4">Edit User</h3>

            <form className="space-y-3 sm:space-y-4">
              {/* Name */}
              <input
                value={currentUser.firstName}
                placeholder="Name..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, firstName: e.target.value })
                }
              />

              {/* LastName */}
              <input
                value={currentUser.lastName}
                placeholder="Last name..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, lastName: e.target.value })
                }
              />

              {/* Email */}
              <input
                type="email"
                value={currentUser.email}
                placeholder="Email..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, email: e.target.value })
                }
              />

              {/* Role */}
              <select
                value={currentUser.role}
                className="w-full border rounded-lg px-3 py-2    focus:ring-2  focus:ring-green-300
              focus:border-green-500"
                onChange={(e) =>
                  setCurrentUser({ ...currentUser, role: e.target.value })
                }
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Manager">manager</option>
              </select>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                  onClick={editHandle}
                >
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Box Modal Delete */}

      {modalDelete && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)]    backdrop-blur-md">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-[270px] sm:max-w-[350px]">
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              ِDelete Users
            </h3>
            <p className="mb-6 text-gray-600">
              Are you sure you want to delete the user?
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
                onClick={() => deleteUsers()}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Box Modal Add */}

      {modalAdd && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)]    backdrop-blur-md">
          <div className="bg-white max-w-[270px] sm:max-w-[350px] rounded-xl shadow-lg p-6">
            {/* Title */}
            <h3 className="text-lg font-bold mb-4">Add User</h3>

            <form className="space-y-3 sm:space-y-4">
              {/* First Name */}
              <input
                value={newUser.firstName}
                placeholder="First name..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setNewUser({ ...newUser, firstName: e.target.value })
                }
              />

              {/* Last Name */}
              <input
                value={newUser.lastName}
                placeholder="Last name..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setNewUser({ ...newUser, lastName: e.target.value })
                }
              />

              {/* Email */}
              <input
                type="email"
                value={newUser.email}
                placeholder="Email..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-green-300"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />

              {/* Role */}
              <select
                value={newUser.role}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-300 focus:border-green-500"
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Manager">Manager</option>
              </select>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setModalAdd(false)}
                  className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                  onClick={handleAddUser}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
