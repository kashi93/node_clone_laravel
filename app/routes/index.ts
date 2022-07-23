import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import { web as routes } from "./web";
dotenv.config();

const env = process.env;
const app: Express = express();
const port = env.APP_PORT;
const host = env.APP_URL;

(async () => {
  for await (const router of routes) {
    const p = router.path;
    const c = new router.controller();
    const m = router.method;
    const rm = router.routeMethod;
    const middlewares = router.middlewares || [];

    app[rm](p, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const cb = await c[m]({
          req,
          res,
        });

        if (cb != null) {
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(cb));
        }
      } catch (err) {
        next(new Error(err));
      }
    });
  }

  app.listen(port, () => {
    console.log("Example app listening at http://%s:%s", host, port);
  });
})();

export default app;
