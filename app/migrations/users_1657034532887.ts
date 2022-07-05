import table from "../vendor/database/table";

export const up = () => {
  return {
    name: "users",
    columns: [
      table.id(),
      table.string("name").nullable(),
      table.string("email").unique(),
      table.timestamp("email_verified_at").nullable(),
      table.string("password"),
      table.timestamps(),
    ],
  };
};

export const down = () => {
  return {
    name: "users",
  };
};
