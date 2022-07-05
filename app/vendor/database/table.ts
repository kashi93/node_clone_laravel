let col: Readonly<String> = "";
export const params: Array<string> = [];

class PrivateMethod {
  nullable() {
    const current_params = params[params.length - 1];
    params[params.length - 1] = `${current_params} NULL`;
  }
  unique() {
    const current_params = params[params.length - 1];
    params[params.length - 1] = `${current_params} UNIQUE`;
  }
}

class Table {
  id(column: string = "id") {
    col = column;
    params.push(`${col} BIGINT NOT NULL`);
    params.push(`PRIMARY KEY (${col})`);
  }

  string(column: string, length: number = 255) {
    col = column;
    params.push(`${col} VARCHAR(${length})`);
    return new PrivateMethod();
  }
  timestamp(column: string) {
    col = column;
    params.push(`${col} TIMESTAMP`);
    return new PrivateMethod();
  }
  timestamps() {
    params.push(`created_at TIMESTAMP NULL`);
    params.push(`updated_at TIMESTAMP NULL`);
  }
}

export default new Table();
