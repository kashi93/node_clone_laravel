"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migration = void 0;
var migration = function (table_name) {
    return "import table from \"../vendor/database/table\";\n\nexport const up = () => {\n    return {\n      name: \"".concat(table_name, "\",\n      columns: [\n      table.id(),\n      table.timestamps(),\n      ],\n    };\n};\n    \nexport const down = () => {\n  return {\n   name: \"").concat(table_name, "\",\n  };\n};\n    ");
};
exports.migration = migration;
