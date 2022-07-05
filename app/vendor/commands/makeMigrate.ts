import Model from "../../models/model";
import yargs from "yargs";
import fs from "fs";
import { params } from "../database/table";

export default yargs.command({
  command: "migrate",
  describe: "Create a new controller class",
  builder: {
    rollback: {
      alias: "r",
      required: false,
      type: "boolean",
      default: false,
    },
  },
  async handler(argv) {
    const model = new Model().connect();
    const migrations = await fs.promises.readdir("app/migrations");

    for await (const migrate of migrations) {
      const m1 = require(`../../migrations/${migrate}`);
      if (!argv.rollback) {
        const m2 = m1.up();
        await model.execute(`CREATE TABLE ${m2.name} (${params.join(",")})`);
      } else {
        const m2 = m1.down();
        await model.execute(`DROP TABLE ${m2.name}`);
      }
    }

    model.disconnect();
    console.log("Migrations successfully");
  },
});
