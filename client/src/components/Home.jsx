// import react from "react";
import img2 from "../assets/tyre.png";
import img1 from "../assets/01.png";
import Uploader from "./uploader";
import Regno from "./Regno";
import axios from "axios";
import React, { useState } from "react";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Home = () => {
  const [image, setImage] = useState(null);
  const [regisNo, setregisNo] = useState("");
  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("regisNo", regisNo);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8000/uploads",
        formData,
        {
          headers: {
            "content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const uploadImage = (e) => {
    console.log(e);
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  const uploadregisNo = (e) => {
    console.log(e);
    console.log(e.target.value);
    setregisNo(e.target.value);
  };

  return (
    <>
      <div className="home" id="home">
        <div className="card">
          <form onSubmit={submitImage}>
            <div className="form-floating">
              <input
                type="text"
                placeholder="Enter reg number"
                id="regno"
                className="form-control"
                onChange={uploadregisNo}
              />
              <label for="regno">
                <p>Registration Number </p>
              </label>
            </div>
            <div>
              <div>
                <label htmlFor="input-file" className="upload">
                  {" "}
                  Upload image
                </label>
              </div>
              <input
                type="file"
                id="input-file"
                accept="image/*"
                onChange={uploadImage}
              />
            </div>
            <div>
              <button type="submit" class="btn btn-success">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="home2">
        <div>
          <img src={img2} alt="img" />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam
            sed facilis ducimus eos recusandae dignissimos repellendus quas
            eveniet autem aut, quisquam eligendi dolor, quibusdam illum
            laudantium dolorum voluptatum labore!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente,
            laudantium natus facere in odit perspiciatis optio, autem magni,
            error tempora. Expedita?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            dicta assumenda at unde suscipit quis magni optio molestias
            laboriosam! Ab, fuga. Ad inventore magnam in tenetur, quae
            voluptatibus animi incidunt. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Natus enim accusamus inventore ipsum assumenda!
            Ratione minima magnam eos ipsam nostrum itaque saepe et iure
            dignissimos ipsum. Totam magnam temporibus perspiciatis.
          </p>
        </div>
      </div>
      <div className="home4" id="contact">
        <div>
          <h1>Follow us on:</h1>
          <article>
            <div>
              <AiFillFacebook />
              <p>facebook</p>
            </div>
            <div>
              <AiFillTwitterCircle />
              <p>twitter</p>
            </div>
            <div>
              <AiFillInstagram />
              <p>instagram</p>
            </div>
            <div>
              <AiFillYoutube />
              <p>youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
