import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function EditPage() {
  const [topic, setTopic] =
    useState(`‘Skybox Audition’ เปิดรับสมัครออดิชันทั่วประเทศ
  เพื่อเป็นนักแสดงในสังกัด Skybox Entertainment พร้อมโอกาสร่วมงาน ละคร
  ภาพยนตร์ ซีรีส์ พิธีกร งานเพลง ฯลฯ ทั้งของ Workpoint Mpictures
  และทุก ๆ ช่อง ทุกค่าย ทุกแพลตฟอร์ม โดยไม่จำกัดค่าย`);
  const [content, setContent] =
    useState(`‘Skybox Audition’ เปิดรับสมัครออดิชันทั่วประเทศ
  เพื่อเป็นนักแสดงในสังกัด Skybox Entertainment พร้อมโอกาสร่วมงาน ละคร
  ภาพยนตร์ ซีรีส์ พิธีกร งานเพลง ฯลฯ ทั้งของ Workpoint Mpictures
  และทุก ๆ ช่อง ทุกค่าย ทุกแพลตฟอร์ม โดยไม่จำกัดค่าย`);
  const [img, setImg] = useState({});
  const [editmode, setEditmode] = useState(false);

  return (
    <div>
      <Navbar />

      <div className="bg-red-100">
        <div className="max-w-6xl m-auto  w-[87.5%]  bg-red-200 ">
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={(e) => setEditmode(!editmode)}
          >
            Button
          </button>

          <h1 className=" text-[2.5rem]  ">{topic}</h1>

          {editmode && (
            <input
              className="w-full "
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          )}

          <img
            className=" object-cover w-[50%]  "
            src="https://site-assets.mediaoxide.com/workpointtv/2022/01/04052918/S__73785423.jpg"
          />

          {editmode && (
            <input
              className="w-full "
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          )}

          <p>{content}</p>
        </div>

        <p></p>
      </div>
    </div>
  );
}

export default EditPage;
