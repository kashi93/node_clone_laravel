import { Request, Response } from "express";
import User from "../../models/user";
import hash from "../../vendor/password/hash";
import Controller from "../controller";

export default class registerController extends Controller {
  async index({ req, res }: { req: Request; res: Response }): Promise<void> {
    const errorBag = await this.validatorToBag(req.session.errors);
    res.render("register/register", {
      error: errorBag,
      request: req.session.request,
    });
  }

  async store({ req, res }: { req: Request; res: Response }): Promise<void> {
    const v = await this.validate(
      {
        req,
      },
      {
        name: ["required"],
        email: ["required", "email"],
        password: ["required", "min:8"],
        password_confirmation: ["required", "confirm:password"],
      }
    );

    if (v.errors.length > 0) {
      req.session.request = req.body;
      req.session.errors = v.errors;
      res.redirect("/register");
    } else {
      const password = await hash.make(req.body.password);
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: password,
      });
      return req.body;
    }
  }
}
