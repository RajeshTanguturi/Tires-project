import React, { useState } from "react";

const Regno = () => {
  const [data, setData] = useState("");
  console.log(data);
  return (
    <div className="form-floating">
      <input
        type="text"
        placeholder="Enter reg number"
        id="regno"
        className="form-control"
        onChange={(e) => setData(e.target.files)}
      />
      <label for="regno">
        <p>Registration Number </p>
      </label>
    </div>
  );
};

export default Regno;
