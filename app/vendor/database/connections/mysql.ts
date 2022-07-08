import { createConnection, Connection } from "mysql";
import dotenv from "dotenv";
dotenv.config();
const env = process.env;

class mysql {
  open() {
    return createConnection({
      host: env.DB_HOST,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
    });
  }

  close(con: Connection) {
    con.end(function (err) {
      //   console.log("MySql connection successfully destroy");
      //   process.exit();
    });
  }

  async query(query: string) {
    const con = this.open();
    await this.execute(con, query);
    this.close(con);
  }

  execute<T>(con: Connection, query: string): Promise<T> {
    try {
      if (!con) throw new Error("mysql connection was not created");

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

export default mysql;
