import React from "react";
import Navbar from "../components/Navbar";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";

function ActivityPage() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activity, setActivity] = useState("");
  const [maxActivity, setMaxActivity] = useState(7);
  const [showModal, setShowModal] = React.useState(false);

  const navigate = new useNavigate();

  useEffect(() => {
    getActivityData();
  }, []);

  const getActivityData = async () => {
    const response = await axios.get("http://localhost:4000/news/");
    setActivity(response.data.data);
  };
  const deleteActivityData = async (id) => {
    // del to server
    const response = await axios.delete(`http://localhost:4000/news/${id}`);
    // del to fe
    const newactivity = activity.filter((e) => e.id !== id);
    setActivity(newactivity);
  };

  return (
    <div>
      <Navbar />

      <div className="relative w-full p-0 h-[150px] ">
        <img
          className="w-full h-full   object-[center_center]  absolute "
          src="https://res.cloudinary.com/dyfc6ffal/image/private/s--o7N22htr--/v1674897917/news/plkizvttjtb36kq2yutk.png"
        />

        <div className="relative max-w-6xl m-auto  w-[87.5%]  ">
          <h1 className="white-font z-10 absolute  text-[2.5rem] top-11 text-white">
            ข้อมูลข่าวสาร
          </h1>
        </div>
      </div>

      <div className=" max-w-6xl m-auto  w-[87.5%] flex py-[2rem] justify-between ">
        <h3 className="text-[1.75rem] ]">ข้อมูลข่าวสาร ทั้งหมด</h3>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={(e) => navigate("/create")}
        >
          + New
        </button>
      </div>

      <div className="w-full  max-w-6xl m-auto flex flex-wrap  justify-center    ">
        {activity ? (
          activity.map((item, index) => {
            if (index <= maxActivity) {
              return (
                <div
                  className="s:maw-w-[50%] md:max-w-[33%] g:max-w-[25%]  px-[15px]  "
                  key={item.id}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative  h-[150px] w-[250px]">
                      <button onClick={(e) => navigate(`/${item.id}`)}>
                        <img
                          className=" object-cover h-[150px] w-[250px] rounded-md "
                          src={item.image}
                        />
                        <div className="absolute top-[50%] left-[50%] w-[48px] translate-y-[-50%] translate-x-[-50%] ">
                          <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                        </div>
                      </button>
                      {/* <button
                        className="absolute right-[-5%] top-[-5%] "
                        onClick={(e) => {
                          // console.log("delete", item.id);
                          console.log("delete");
                          // deleteActivityData(item.id);
                        }}
                      >
                        <GiCancel color="red" />
                      </button> */}
                      <Modal
                        id={item.id}
                        deleteActivityData={deleteActivityData}
                        title={item.title}
                      />
                      
                    </div>
                    <div
                      className="my-2  w-[250px] hover:underline cursor-pointer"
                      onClick={(e) => navigate(`/${item.id}`)}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      {!(maxActivity >= activity.length) && (
        <div className="w-full  max-w-6xl m-auto bg-[#f9f9f9]  flex justify-center py-5 my-5 ">
          <button
            className=" text-[#007bff] hover:underline   text-m flex justify-center   "
            type="button"
            onClick={() => {
              setMaxActivity(maxActivity + 20);
            }}
          >
            ดูเพิ่ม
            <svg
              className="w-5 h-5 ml-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ActivityPage;

// function Modal(props) {
//   const [showModal, setShowModal] = React.useState(false);
 
//   return (
//     <>
//       {/* <button
//         className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//         type="button"
//         onClick={() => setShowModal(true)}
//       >
//         Open small modal
//       </button> */}
//       <button
//         className="absolute right-[-5%] top-[-5%] "
//         onClick={(e) => {
//           setShowModal(true);
//           console.log(props);
//         }}
//       >
//         <GiCancel color="red" />
//       </button>
//       {showModal ? (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-sm">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">Delete</h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setShowModal(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-slate-500 text-lg leading-relaxed">
//                     I always felt like I could do anything. That’s the main
//                     thing people are controlled by! Thoughts- their perception
//                     of themselves! They're slowed down by their perception of
//                     themselves. If you're taught you can’t do anything, you
//                     won’t do anything. I was taught I could do everything.
//                   </p>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setShowModal(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => {
//                       console.log(props.id)
//                       props.deleteActivityData(props.id)
//                       setShowModal(false)
//                     }}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }
