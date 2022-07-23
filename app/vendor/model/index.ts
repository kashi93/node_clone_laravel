import Collection from "./builder/collection";
import Create from "./builder/create";
import Where from "./builder/where";

class Model implements Create, Where {
  table: string;
  useTimeStamps: boolean;

  create: (params: {
    [column: string]: string | number | null;
  }) => Promise<any>;
  where: (column: string, operator: "=" | "!=", value: any) => Collection;
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== "constructor") {
        derivedCtor.prototype[name] = baseCtor.prototype[name];
      }
    });
  });
}

applyMixins(Model, [Create, Where]);

export default Model;
