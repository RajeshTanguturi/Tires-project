import { phoneNo, tollPlaza } from "./config.js";
import mongoose from "mongoose";
import Tire from "./schemas/report.js";

import express from "express";
import cors from "cors";
import multer from "multer";
import tf from "@tensorflow/tfjs-node";
import sharp from "sharp";

// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const tf = require("@tensorflow/tfjs-node");
// const sharp = require("sharp");

const app = express();
let model;
const modelPath = "model.json";

// async function loadModel() {
//     try {
//         model = await tf.loadLayersModel(`file://${modelPath}`);
//         console.log("Model loaded");
//     } catch (error) {
//         console.error("Error loading the model:", error);
//     }
// }

async function loadModel() {
  try {
    model = await tf.loadLayersModel(`file://${modelPath}`);
    if (model === undefined) {
      throw new Error("Model is undefined after loading.");
    }
    console.log("Model loaded");
  } catch (error) {
    console.error("Error loading the model:", error);
    throw error; // Propagate the error to the caller
  }
}

// loadModel();
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.get("/", function (req, res) {
  console.log("got a GET request for the home page");
  res.send("Welcome to Home page");
});



// dealer get request 

// Route for Get All tire reports from database

app.get('/tires', async (request, response) => {
  try {
    const tires = await Tire.find({});

    return response.status(200).json({
      count: tires.length,
      data: tires,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One tire report from database by id
app.get('/tires/:id', async (request, response) => {
try {
  const { id } = request.params;

  const tire = await Tire.findById(id);

  return response.status(200).json(tire);
  } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
  }
});


app.post("/uploads", upload.single("image"), async (req, res) => {
  // console.log(req)
  console.log("post req recived");
  console.log(req.file);
  try {
    const regisNo = req.body.regisNo;
    console.log(req.file);
    console.log(req.file.path);
    const processedImage = await sharp(req.file.path)
      .resize({ width: 128, height: 128 })
      .toBuffer();
    console.log("Image processed successfully.");
    //   res.json({ message: 'Image processed successfully.' });
    const inputTensor = tf.node.decodeImage(processedImage);
    const expandedTensor = inputTensor.expandDims();
    const normalizedTensor = expandedTensor.div(255.0);
    const reshapedTensor = normalizedTensor.reshape([1, 128, 128, 3]);
    const predictions = model.predict(reshapedTensor);
    const label = predictions.dataSync()[0] > 0.5 ? "normal" : "cracked";
    // console.log({ label, confidence: predictions.dataSync()[0] * 100 });
    const damage = 100 - predictions.dataSync()[0] * 100;
    // res.send({ label, confidence: predictions.dataSync()[0] * 100 });

    try {
      const newTire = {
        label: label,
        damage: damage,
        tollPlaza: tollPlaza,
        phoneNo: phoneNo,
        regisNo: regisNo,
      };

      const tire = await Tire.create(newTire);

      console.log("data sent to database");
      return res.status(201).send(tire);
    } catch (error) {
      console.error("not send to database", error);
    }
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Error processing image" });
  }
});

async function startServer() {
  await loadModel();
  await mongodbload();
  app.listen(8000, () => {
    console.log("Server is listening on port 8000");
  });
}

startServer();
async function mongodbload() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/tires")
    .then(() => {
      console.log("app connected to database");
      // app.listen(PORT, () => { console.log(`app is listening to port ${PORT}`) })
    })
    .catch((error) => {
      console.log(error);
    });
}
