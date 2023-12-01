import React, { useState } from "react";

const Uploader = () => {
  const [data, setData] = useState();

  console.log(data);
  return (
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
        onChange={(e) => {
          setData(e.target.files);
        }}
      />
    </div>
  );
};

export default Uploader;
