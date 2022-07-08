import express from "express";
import app from "./routes";
import dotenv from "dotenv";
dotenv.config();

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
const env = process.env;
const is_dev = env.APP_ENV == "local";
const root = env.PWD;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: "kashi", saveUninitialized: false, resave: false }));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(`${root}/public/assets`));
app.set("views", __dirname + "/views");
app.set("view engine", is_dev ? "tsx" : "js");
app.engine(
  is_dev ? "tsx" : "js",
  require("express-react-views").createEngine()
);
