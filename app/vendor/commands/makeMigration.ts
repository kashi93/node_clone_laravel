import yargs from "yargs";
import fs from "fs";
import { migration } from "../template/migrations";

export default yargs.command({
  command: "migration",
  describe: "Create a new controller class",
  builder: {
    create: {
      alias: "c",
      required: true,
      type: "string",
    },
  },
  async handler(argv) {
    const migrations = await fs.promises.readdir("app/migrations");
    let fileName = "";
    for await (const migrate of migrations) {
      const m1 = require(`../../migrations/${migrate}`);
      if (m1.up != null) {
        const m2 = m1.up();
        if (m2.name == argv.create) {
          throw new Error(`Migration ${argv.create} already exist!`);
        }
      }
    }

    let p = "app/migrations/";
    let m: any = null;

    if (!Number.isNaN(parseInt(String(argv.name)))) {
      console.log("Migrations name invalid!");
      return;
    }

    if (argv.create != "") {
      m = migration(String(argv.create));
      fileName = `${argv.create}_${new Date().getTime()}`;
    }

    if (m != null) {
      await fs.promises.writeFile(`${p}${fileName}.ts`, m, "utf-8");
    }

    //
  },
});
