"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
require("./vendor/commands/makeController");
require("./vendor/commands/makeMigrate");
require("./vendor/commands/makeMigration");
yargs_1.default.parse();
