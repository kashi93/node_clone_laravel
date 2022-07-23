import Collection from "./collection";

export default class Where {
  table: string = "";
  where(column: string, operator: "=" | "!=", value: any) {
    const params = `WHERE ${column} ${operator} '${value}'`;
    return new Collection(this.table, params);
  }
}
