import React from "react";
import Navbar from "../components/Navbar";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ActivityPage() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [activity, setActivity] = useState("");
  const navigate = new useNavigate();

  useEffect(() => {
    getActivityData();
  }, []);

  const getActivityData = async () => {
    const response = await axios.get("http://localhost:4000/news/");
    setActivity(response.data.data);
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
          createActivity
        </button>
      </div>

      <div className="w-full  max-w-6xl m-auto flex flex-wrap  justify-center    ">
        {activity ? (
          activity.map((item) => {
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
                    <button
                      className="absolute right-[-5%] top-[-5%] "
                      onClick={(e) => {
                        console.log("delete");
                      }}
                    >
                      <GiCancel color="red" />
                    </button>
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
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default ActivityPage;
