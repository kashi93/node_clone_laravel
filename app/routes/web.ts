import { Express, Request, Response } from "express";
import HomeContoller from "../controllers/homeController";
import { Web } from "./types/web";

export const web: Array<Web> = [
  {
    path: "/",
    controller: HomeContoller,
    method: "index",
  },
];
