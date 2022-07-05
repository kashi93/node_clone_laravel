import Model from "./models/model";

import express from "express";
import app from "./routes";
import dotenv from "dotenv";
dotenv.config();

const env = process.env;
const is_dev = env.APP_ENV == "local";
const root = env.PWD;

new Model().connect();

app.use(express.static(`${root}/public/assets`));
app.set("views", __dirname + "/views");
app.set("view engine", is_dev ? "tsx" : "js");
app.engine(
  is_dev ? "tsx" : "js",
  require("express-react-views").createEngine()
);
