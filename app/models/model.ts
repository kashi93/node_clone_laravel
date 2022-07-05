import { createPool, Pool } from "mysql";
import dotenv from "dotenv";
dotenv.config();

const env = process.env;
export let con: Pool;

export default class Model {
  connect() {
    try {
      con = createPool({
        host: env.DB_CONNECTION,
        user: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
      });

      console.debug("MySql Adapter Pool generated successfully");
      return this;
    } catch (error) {
      console.error("[mysql.connector][init][Error]: ", error);
    }
  }

  disconnect() {
    con.end(function (err) {
      console.log("MySql Adapter Pool successfully destroy");
      process.exit();
    });
  }

  execute<T>(query: string): Promise<T> {
    try {
      if (!con)
        throw new Error(
          "Pool was not created. Ensure pool is created when running the app."
        );

      return new Promise<T>((resolve, reject) => {
        con.query(query, [], (error, results) => {
          if (error) reject(error);
          else resolve(results);
        });
      });
    } catch (error) {
      console.error("[mysql.connector][execute][Error]: ", error);
      throw new Error("failed to execute MySQL query");
    }
  }
}
