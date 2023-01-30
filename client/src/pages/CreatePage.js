import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function CreatePage() {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState({});
  const [editmode, setEditmode] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    for (let avatarKey in img) {
      formData.append("img", img[avatarKey]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="bg-red-100">
        <div className="max-w-6xl m-auto  w-[87.5%]  bg-red-200 ">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="flex justify-end">
              {" "}
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={(e) => setEditmode(!editmode)}
              >
                Button
              </button>
            </div>

            <div>
              <h1 className=" text-[2.5rem]  ">{topic}</h1>

              {editmode && (
                <div class="mb-3 pt-0">
                  <input
                    type="text"
                    class="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={topic}
                    placeholder="Enter topic here"
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
              )}
            </div>

            <div>
              <img
                className=" object-cover w-[50%]  "
                src="https://site-assets.mediaoxide.com/workpointtv/2022/01/04052918/S__73785423.jpg"
              />
            </div>

            <div>
              <p>{content}</p>
              {editmode && (
                <div class="mb-3 pt-0">
                  <input
                    type="text"
                    class="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter content here"
                  />
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
