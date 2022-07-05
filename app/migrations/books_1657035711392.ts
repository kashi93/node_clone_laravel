import table from "../vendor/database/table";

export const up = () => {
    return {
      name: "books",
      columns: [
      table.id(),
      table.timestamps(),
      ],
    };
};
    
export const down = () => {
  return {
   name: "books",
  };
};
    