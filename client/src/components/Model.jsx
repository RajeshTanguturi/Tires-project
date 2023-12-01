import React, { useState } from "react";
import axios from "axios";

const Result = () => {
    const [file, filedata] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileChange = (event) => {
        filedata(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("file", file);

        axios.post("http://localhost:5000/predict", formData)
            .then((response) => {
                setResult(response.data);
            });
    };

    return (
        <div>
            <h2>Upload an image for prediction</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            {file && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={URL.createObjectURL(file)} alt="Uploaded" width="200" />
                </div>
            )}

            {result && (
                <div>
                    <h3>Result:</h3>
                    <p>Prediction: {result.prediction}</p>
                    <p>Confidence: {result.confidence}%</p>
                </div>
            )}
        </div>
    );

};

export default Result;