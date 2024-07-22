import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Name"],
    },
    // photo: {
    //   type: String,
    //   required: [true, "Please enter photo"],
    // },
    price: {
        type: Number,
        required: [true, "Please enter Price"],
    },
    stock: {
        type: Number,
        required: [true, "Please enter Stock"],
    },
    category: {
        type: String,
        required: [true, "Please enter Category"],
        trim: true,
    },
    // description: {
    //   type: String,
    //   required: [false, "Please enter Description"],
    // },
    ratings: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
export const Product = mongoose.model("Product", schema);
