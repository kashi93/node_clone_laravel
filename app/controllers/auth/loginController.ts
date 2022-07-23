import { Request, Response } from "express";
import auth from "../../vendor/helpers/auth";
import Controller from "../controller";

export default class loginController extends Controller {
  async index({ req, res }: { req: Request; res: Response }): Promise<void> {
    const errorBag = await this.validatorToBag(req.session.errors);
    res.render("login/login", {
      error: errorBag,
      request: req.session.request,
    });
  }

  async login({ req, res }: { req: Request; res: Response }): Promise<any> {
    const errorBag = await this.validatorToBag(req.session.errors);
    const v = await this.validate(
      {
        req,
      },
      {
        email: ["required", "email"],
        password: ["required"],
      }
    );
    if (v.errors.length > 0) {
      req.session.request = req.body;
      req.session.errors = v.errors;
      res.redirect("/login");
    } else {
      await auth.attempt(req, res);
      res.redirect("/");
    }
  }
}
