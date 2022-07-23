import { Express, Request, Response } from "express";
import HomeContoller from "../controllers/homeController";
import loginController from "../controllers/auth/loginController";
import { Web } from "./types/web";
import registerController from "../controllers/auth/registerController";

export const web: Array<Web> = [
  {
    routeMethod: "get",
    path: "/",
    controller: HomeContoller,
    method: "index",
    middlewares: ["isLogin"],
  },
  {
    routeMethod: "get",
    path: "/login",
    controller: loginController,
    method: "index",
  },
  {
    routeMethod: "post",
    path: "/login",
    controller: loginController,
    method: "login",
  },
  {
    routeMethod: "get",
    path: "/register",
    controller: registerController,
    method: "index",
  },
  {
    routeMethod: "post",
    path: "/register",
    controller: registerController,
    method: "store",
  },
];
