import React from "react";
import Navbar from "../components/Navbar";
import { GiCancel } from "react-icons/gi";

function ActivityPage() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Navbar />

      <div className="relative w-full p-0 h-[150px] ">
        <img
          className="w-full h-full   object-[center_center]  absolute "
          src="https://res.cloudinary.com/dyfc6ffal/image/private/s--o7N22htr--/v1674897917/news/plkizvttjtb36kq2yutk.png"
        />

        <div className="relative max-w-6xl m-auto  w-[87.5%]  ">
          <h1 class="white-font z-10 absolute  text-[2.5rem] top-11 text-white">
            ข้อมูลข่าวสาร
          </h1>
        </div>
      </div>

      <div className=" max-w-6xl m-auto  w-[87.5%]">
        <h3 className="text-[1.75rem] py-[2rem] ]">ข้อมูลข่าวสาร ทั้งหมด</h3>
      </div>

      <div className="w-full  max-w-6xl m-auto flex flex-wrap justify-center after:flex-auto  ">
        {array.map((item) => {
          return (
            <div className="s:maw-w-[50%] md:max-w-[33%] g:max-w-[25%]  px-[15px] ">
              <a href="#">
                <div className="flex flex-col items-center">
                  <div className="relative  h-[150px] w-[250px]">
                    <img
                      className=" object-cover h-[150px] w-[250px] rounded-md "
                      src="https://site-assets.mediaoxide.com/workpointtv/2022/01/04052918/S__73785423.jpg"
                    />
                    <div className="absolute top-[50%] left-[50%] w-[48px] translate-y-[-50%] translate-x-[-50%] ">
                      <img src="https://www.workpointtv.com/wp-content/themes/wptv/assets/img/btn-play.png" />
                    </div>
                    <button className="absolute right-[-5%] top-[-5%] ">
                      <GiCancel color="red" />
                    </button>
                  </div>
                  <div className="my-2  w-[250px]">
                    ‘Skybox Audition’ เปิดรับสมัครออดิชันทั่วประเทศ
                    เพื่อเป็นนักแสดงในสังกัด Skybox Entertainment
                    พร้อมโอกาสร่วมงาน ละคร ภาพยนตร์ ซีรีส์ พิธีกร งานเพลง ฯลฯ
                    ทั้งของ Workpoint Mpictures และทุก ๆ ช่อง ทุกค่าย
                    ทุกแพลตฟอร์ม โดยไม่จำกัดค่าย{" "}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ActivityPage;
