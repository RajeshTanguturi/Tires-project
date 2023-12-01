import mongoose from "mongoose";

const Tireschema = new mongoose.Schema(
    {
        regisNo: {
            type: String,
            // required: true
        },
        label: {
            type: String,
            // required: true,
        },
        damage: {
            type: Number,
            // required: true,
        },
        phoneNo: {
            type: Number,
            // required: true
        },
        tollPlaza: {
            type: String,
            // required: true
        }
    },
    {
        timestamps: true,
    }
);

const Tire = mongoose.model("Tire", Tireschema);

export default Tire;
