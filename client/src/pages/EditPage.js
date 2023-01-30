import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";

function EditPage() {
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState({});
  const [oldimg, setOldImg] = useState({});
  const [editmode, setEditmode] = useState(true);

  const navigate = new useNavigate();
  const params = useParams();

  useEffect(() => {
    getActivityData();
  }, []);

  // for (let key in img) {
  //   console.log("img", img[key]);
  //   console.log("oldimg", oldimg);
  //   console.log("T or F", img[key] === oldimg);
  // }

  const getActivityData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/news/${params.id}`
      );
      console.log(response.data);
      setTopic(response.data.data.title);
      setContent(response.data.data.content);

      const file = await getImageFile(response.data.data.image);

      console.log(file)

      setOldImg(file);
      const uniqueId = Date.now();
      setImg({
        [uniqueId]: file,
      });
    } catch (error) {
      console.log(error);
      navigate('/')
    }
  };

  async function getImageFile(imageURL) {
    try {
      const response = await fetch(imageURL);
      const blob = await response.blob();
      const file = new File([blob], "image.jpg", { type: "image/jpeg" });
      // use the file object
      return file;
    } catch (error) {
      console.error(error);
    }
  }

  const handleFileChange = (event) => {
    const uniqueId = Date.now();
    setImg({
      [uniqueId]: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    const formData = new FormData();

    formData.append("topic", topic);
    formData.append("content", content);

    for (let key in img) {
      formData.append("img", img[key]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    editActivity(formData);
  };

  const editActivity = async (data) => {
    console.log("editActivity");
    await axios.put(`http://localhost:4000/news/${params.id}`, data, {
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
              onClick={(e) => {
                setEditmode(!editmode);
              }}
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
                <label htmlFor="upload" className="cursor-pointer">
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
                Edit Activity
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
