import { useEffect, useState } from "react";
import axios from "axios";

function News() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState({});

  const handleFileChange = (event) => {
    const uniqueId = Date.now();
    setImg({
      ...img,
      [uniqueId]: event.target.files[0],
    });
  };

  const handleRemoveImage = (event, avatarKey) => {
    event.preventDefault();
    delete img[avatarKey];
    setImg({ ...img });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    for (let avatarKey in img) {
      formData.append("img", img[avatarKey]);
    }

    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    register(formData);
  };

  const register = async (data) => {
    await axios.post("http://localhost:4000/news/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // navigate("/login");
  };
  return (
    <div className="register-form-container">
      
      <form className="register-form" onSubmit={handleSubmit}>

        
        <h1>Register Form</h1>
        <div className="input-container">
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter username here"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Password
            <input
              id="password"
              name="password"
              type="text"
              placeholder="Enter password here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            First Name
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Enter first name here"
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              value={firstName}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Last Name
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Enter last name here"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              value={lastName}
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="upload">
            Avatar
            <input
              id="upload"
              name="avatar"
              type="file"
              placeholder="Enter last name here"
              onChange={handleFileChange}
              hidden
            />
          </label>

          <div className="image-list-preview-container">
            {Object.keys(img).map((avatarKey) => {
              const file = img[avatarKey];
              return (
                <div key={avatarKey} className="image-preview-container">
                  <img
                    className="image-preview"
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                  />
                  <button
                    className="image-remove-button"
                    onClick={(event) => handleRemoveImage(event, avatarKey)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default News;
