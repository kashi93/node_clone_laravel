export const migration = (table_name: string) => {
  return `import table from "../vendor/database/table";

export const up = () => {
    return {
      name: "${table_name}",
      columns: [
      table.id(),
      table.timestamps(),
      ],
    };
};
    
export const down = () => {
  return {
   name: "${table_name}",
  };
};
    `;
};
