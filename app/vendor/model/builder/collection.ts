import dotenv from "dotenv";
dotenv.config();
const env = process.env;
const is_dev = env.APP_ENV == "local";

export default class Collection {
  params: any;
  table: string;

  constructor(table: string, params: string) {
    this.table = table;
    this.params = params;
  }

  first() {
    return new Promise(async (res, rej) => {
      try {
        const query = `SELECT * FROM ${this.table} ${this.params} LIMIT 1`;
        const d1 = await this.execute(query);

        if (d1 != null) {
          if (d1[0] != null) {
            res({
              ...d1[0],
            });
            return;
          }
        }
        res(null);
      } catch (error) {
        rej(error);
      }
    });
  }

  private async execute?(query: string) {
    const pdo = require(`../../database/connections/${env.DB_CONNECTION}.${
      is_dev ? "ts" : "js"
    }`).default;
    const db = new pdo();
    const q = await db.query(query);
    return q;
  }
}
