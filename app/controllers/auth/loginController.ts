import { Request, Response } from "express";
import hash from "../../vendor/password/hash";
import Controller from "../controller";

export default class loginController extends Controller {
  async index({ req, res }: { req: Request; res: Response }): Promise<void> {
    res.render("login/login");
  }

  async login({ req, res }: { req: Request; res: Response }): Promise<any> {
    // const password = await hash.make(req.body.password);
    // return password;
    // $2b$10$ib9savJky7NVM.Be2wWanO4oBldP9RJ3oE/vawrHRAL2TZ55Bi1R2;
    // const v = await hash.verify(
    //   "req.body.password",
    //   "$2b$10$ib9savJky7NVM.Be2wWanO4oBldP9RJ3oE/vawrHRAL2TZ55Bi1R2"
    // );
    // return v;
  }
}
