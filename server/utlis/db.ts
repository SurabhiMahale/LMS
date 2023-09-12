import mongoose from "mongoose";
require("dotenv").config();
const dbUrl = process.env.DB_URL || '';

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as mongoose.ConnectOptions);
        console.log("Successfully Connected to the database!");
    } catch (error) {
        console.error("Database connection error", error);
        setTimeout(connectDB, 5000);
    }
}
export default connectDB;
