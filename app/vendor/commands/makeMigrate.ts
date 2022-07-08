import Model from "../model";
import yargs from "yargs";
import fs from "fs";
import { params } from "../database/table";
import dotenv from "dotenv";
dotenv.config();
const env = process.env;

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
    const migrations = await fs.promises.readdir("app/migrations");
    const pdo =
      require(`../../vendor/database/connections/${env.DB_CONNECTION}.ts`).default;
    const db = new pdo();

    for await (const migrate of migrations) {
      const m1 = require(`../../migrations/${migrate}`);
      if (!argv.rollback) {
        const m2 = m1.up();
        await db.query(`CREATE TABLE ${m2.name} (${params.join(",")})`);
      } else {
        const m2 = m1.down();
        await db.query(`DROP TABLE ${m2.name}`);
      }
    }

    console.log("Migrations successfully");
  },
});
