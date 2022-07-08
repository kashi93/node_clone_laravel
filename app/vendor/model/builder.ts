import dotenv from "dotenv";
dotenv.config();
const env = process.env;

export default class Builder {
  table: string = "";
  useTimeStamps: boolean = true;
  private created_at: any = null;
  private updated_at: any = null;

  create(params: { [column: string]: string | number | null }) {
    return new Promise(async (res, rej) => {
      try {
        let p = await this.objToParam1(params);
        p = await this.createTimeStamp(p);
        const query = `INSERT INTO ${this.table} (${p.columns.join(
          ","
        )}) VALUES (${p.data.join(",")})`;
        await this.execute(query);
        res(1);
      } catch (error) {
        rej(error);
      }
    });
  }

  private async createTimeStamp(current_params: {
    columns: Array<any>;
    data: Array<any>;
  }): Promise<{ columns: Array<any>; data: Array<any> }> {
    if (this.useTimeStamps) {
      if (this.created_at == null) {
        console.log(this.dateTime());

        current_params.columns.push("created_at");
        current_params.data.push(`'${this.dateTime()}'`);
      } else {
        current_params.columns.push("created_at");
        current_params.data.push(this.created_at);
      }

      if (this.updated_at == null) {
        current_params.columns.push("updated_at");
        current_params.data.push(`'${this.dateTime()}'`);
      } else {
        current_params.columns.push("updated_at");
        current_params.data.push(this.updated_at);
      }
    }
    return current_params;
  }

  private dateTime(d: any = null) {
    let date;

    if (d != null) {
      date = new Date(d);
    } else {
      date = new Date();
    }

    date =
      date.getFullYear() +
      "-" +
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + date.getDate()).slice(-2) +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2) +
      ":" +
      ("00" + date.getSeconds()).slice(-2);

    return date;
  }
  private async objToParam1(
    obj: any
  ): Promise<{ columns: Array<any>; data: Array<any> }> {
    const columns: Array<any> = [];
    const data: Array<any> = [];
    const keys: Array<any> = Object.getOwnPropertyNames(obj);

    for await (const key of keys) {
      if (key == "created_at") {
        this.created_at = `'${obj[key]}'`;
      } else if (key == "updated_at") {
        this.updated_at = `'${obj[key]}'`;
      } else {
        columns.push(key);
        data.push(`'${obj[key]}'`);
      }
    }

    return {
      columns,
      data,
    };
  }

  private async execute(query: string) {
    const pdo =
      require(`../database/connections/${env.DB_CONNECTION}.ts`).default;
    const db = new pdo();
    await db.query(query);
  }
}
