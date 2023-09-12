import { app } from "./app";
import connectDB from "./utlis/db";
require("dotenv").config();

// create server
app.listen(process.env.PORT, () => {
  console.log(`Server is connected to port ${process.env.PORT}`);  //Backticks
  connectDB();
});
