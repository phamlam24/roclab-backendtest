import express, { response } from "express";

// I DELIBERATELY PUT CONFIG.JS IN GITIGNORE! THE CODE WILL NOT WORK WITHOUT THESE TWO VARIABLES. READ THE README
import { PORT, mongoDBURL } from "./config.js";

import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

app.get("/", (request, response) => {
  // console.log(request);
  return response.status(234).send("Welcome to MERN Stack Tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to database`);
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
