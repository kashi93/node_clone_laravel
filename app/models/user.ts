import Model from "../vendor/model";
class User extends Model {
  constructor() {
    super();
    this.table = "users";
  }
}

export default new User();
