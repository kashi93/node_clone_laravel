import express, { Express, Request, Response } from "express";
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

    app.get(p, async (req: Request, res: Response) => {
      const r = await c[m](req, res);

      if (r != null) {
        res.send();
      }
    });
  }

  app.listen(port, () => {
    console.log("Example app listening at http://%s:%s", host, port);
  });
})();

export default app;
