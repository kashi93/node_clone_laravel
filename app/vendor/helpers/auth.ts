import { Request, Response } from "express";
import userModel from "../../models/user";
import hash from "../password/hash";
import session from "./session";
import str from "./str";

class auth {
  async attempt(req: Request, res: Response) {
    try {
      const u = userModel.where("email", "=", req.body.email);
      const d: any = await u.first();
      const v = await hash.verify(req.body.password, d.password || "");

      if (v) {
        const s = (await hash.make(str.random(100)))
          .split("/")
          .pop()
          .split("''")
          .pop();
        const hour = 6;
        const exp = new Date(Date.now() + hour);
        await session.make(s, d);
        res.cookie("jwt", s, {
          maxAge: hour,
          httpOnly: true,
          secure: true,
        });
        res.append("Set-Cookie", "jwt=" + s + ";");
        return true;
      }

      return false;
    } catch (error) {
      throw new Error(error);
    }
  }
  async user(req: Request): Promise<any> {
    try {
      const token = req.cookies["jwt"];
      if (token == null) {
        return null;
      }
      const u = await session.read(token);

      return u;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new auth();
