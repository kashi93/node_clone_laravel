import Model from "./model";

export default class User extends Model {
  all() {
    return this.execute("SELECT * FROM `books`", []);
  }
}
