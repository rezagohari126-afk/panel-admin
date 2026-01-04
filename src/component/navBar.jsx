import React, { useState, useEffect } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [notif, setNotif] = useState([]);
 

  const notifications = [
  { id: "1", message: "New order received", time: "2 minutes ago" },
  { id: "2", message: "5 products are low on stock", time: "10 minutes ago" },
  { id: "3", message: "New user registered", time: "1 hour ago" },
  { id: "4", message: "hellow boss,i see you at afternoon in your house with my family.good lock", time: "last day" }
];


  useEffect(() => {
    const fetchData = async () => {
      setNotif(notifications);
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className=" mt-5 flex flex-row justify-between items-center max-w-300 px-4 sm:px-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-0">Reports</h1>

        <div className="flex flex-row gap-4 sm:gap-12 items-center">
          {/* Notifications */}
          <div
            className="relative bg-[#FEF6E6] w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-xl cursor-pointer hover:scale-110"
            onClick={() => setShowModal(!showModal)}
          >
            <IoNotificationsOutline className="text-amber-300 w-5 h-5 sm:w-6 sm:h-6"></IoNotificationsOutline>
            <span className="bg-red-500 text-white rounded-full w-2 h-2 text-center leading-1.75 absolute top-1.5 right-1.5"></span>
          </div>

          {/* Profile */}
          <div className="flex flex-row gap-2 sm:gap-4 items-center">
            <img
              src="/images/person.png"
              alt="person"
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl"
            />
            <div className="flex flex-col gap-0.5 text-sm sm:text-base">
              <p className="font-bold">Reza</p>
              <p className="text-[#737791] font-bold">admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Box Modal */}

      {showModal && (
        <div className="fixed z-50  top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,10%)] backdrop-blur-md">
          <div className=" rounded-lg bg-white max-w-70 sm:max-w-125  max-h-100 min-h-62.5  px-2 py-1 relative ">
            <IoClose
              className="absolute z-50 top-2.5 right-2.5 text-[rgba(0,0,0,30%)] text-[24px]"
              onClick={() => setShowModal(!showModal)}
            ></IoClose>

            <h2 className='text-[18px] font-bold sticky top-0.5 left-0.5  relative after:content-[""] after:absolute after:left-0.75 after:-bottom-0.5 after:inline-block after:w-15 after:h-1 after:rounded-lg after:bg-blue-500'>
              notification
            </h2>

            <div className="mt-7 flex flex-col justify-start items-start overflow-y-scroll  pb-2.5 min-h-37.5 max-h-50 ">
              {notif.map((msg) => {
                return (
                  <div key={msg.id} className="mb-3.5">
                    <p className="mb-2.5 font-bold text-[14px] sm:text-base">{msg.message}</p>
                    <span className="opacity-50 text-[12px]">{msg.time}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
