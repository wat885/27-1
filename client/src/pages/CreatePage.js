import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function CreatePage() {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState({});
  const [editmode, setEditmode] = useState(true);

  const navigate = new useNavigate();

  const handleFileChange = (event) => {
    const uniqueId = Date.now();
    setImg({
      [uniqueId]: event.target.files[0],
    });
  };

  console.log(img);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    const formData = new FormData();

    formData.append("topic", topic);
    formData.append("content", content);

    for (let avatarKey in img) {
      formData.append("img", img[avatarKey]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    createActivity(formData);
  };

  const createActivity = async (data) => {
    console.log("createActivity");
    await axios.post("http://localhost:4000/news/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    navigate("/");
  };

  return (
    <div>
      <Navbar />

      <div className="">
        <div className="max-w-6xl m-auto  w-[87.5%]   ">
          <div className="flex justify-end">
            {" "}
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={(e) => setEditmode(!editmode)}
            >
              {editmode ? "hide" : "edit"}
            </button>
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            <div>
              <h1 className=" text-[2.5rem]  ">{topic}</h1>

              {editmode && (
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={topic}
                    placeholder="Enter topic here"
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
              )}
            </div>

            <div>
              {editmode && (
                <label htmlFor="upload">
                  Upload image
                  <input
                    id="upload"
                    name="img"
                    type="file"
                    placeholder="Enter last name here"
                    onChange={handleFileChange}
                    hidden
                  />
                </label>
              )}

              <div className="">
                {Object.keys(img).map((key) => {
                  const file = img[key];
                  return (
                    <div key={key} className="">
                      <img
                        className=" object-cover w-[50%]  "
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p>{content}</p>
              {editmode && (
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    className="px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white  rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Enter content here"
                  />
                </div>
              )}
            </div>

            {editmode && (
              <button
                className="text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Create Activity
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
