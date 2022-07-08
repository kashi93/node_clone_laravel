import { Request, Response } from "express";
import ValidationType from "../vendor/validation/typeValidation";
import Validator from "../vendor/validation/validator";
export default class Controller {
  async validate({ req }: { req: Request }, rule: ValidationType) {
    const v = await Validator.make({ req }, rule);
    const v1 = await v.validate({ req });
    return v1;
  }
  async validatorToBag(errors: any) {
    const err: any = {};

    if (errors != null) {
      for await (const er of errors) {
        err[er.param] = er;
      }
    }

    return err;
  }
}
