import React, { useEffect, useState } from "react";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  

  const usersArr = [
  { id: "1", firstName: "Alir", lastName: "Rezayi", email: "ali@example.com", role: "User" },
  { id: "2", firstName: "Sara", lastName: "Mohammadi", email: "sara@example.com", role: "user" },
  { id: "4", firstName: "hashem", lastName: "asghari", email: "hashem@example.com", role: "user" },
  { id: "5", firstName: "mehran", lastName: "kiani", email: "mehran@example.com", role: "admin" },
  { id: "6", firstName: "Reza", lastName: "Gohari", email: "reza@example.com", role: "manager" }
];


  useEffect(() => {
    const fetchData = async () => {
      const data = usersArr
      setUsers(data);
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRoleClass = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
      case "manager":
        return "bg-green-100 text-green-700";
      case "user":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className=" bg-white rounded-xl shadow p-4 overflow-x-auto max-w-150">
      <table className="w-full min-w-125 text-sm border-collapse table-fixed">
        <thead>
          <tr className="border-b border-b-zinc-500">
            <th className="py-2 text-center font-semibold">User</th>
            <th className="py-2 text-center font-semibold">Email</th>
            <th className="py-2 text-center font-semibold">Role</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {users.slice(-4).map((user) => (
            <tr key={user.id} className="transition hover:bg-gray-50 ">
              {/* USER */}
              <td className="py-3 px-2 ">
                <div className="flex items-center justify-start gap-3 min-w-35">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gray-600 font-semibold">
                      {user.firstName[0]}
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-gray-700 font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
              </td>

              {/* EMAIL */}
              <td className="py-3 text-center text-gray-600 whitespace-nowrap">
                {user.email}
              </td>

              {/* ROLE */}
              <td className="py-3 text-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleClass(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
