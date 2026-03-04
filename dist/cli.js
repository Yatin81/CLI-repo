#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliEngine_1 = require("./cli_engine/cliEngine");
// import GreetCommand from "./commands/greetCommand";
const addCommand_1 = __importDefault(require("./commands/addCommand"));
const subtractCommand_1 = __importDefault(require("./commands/subtractCommand"));
const multiplyCommand_1 = __importDefault(require("./commands/multiplyCommand"));
const divideCommand_1 = __importDefault(require("./commands/divideCommand"));
// import JokeCommand from "./commands/jokeCommand";
const countryCommand_1 = __importDefault(require("./commands/countryCommand"));
const pokemonCommand_1 = __importDefault(require("./commands/pokemonCommand"));
// import MovieCommand from "./commands/movieCommand";
const githubCommand_1 = __importDefault(require("./commands/githubCommand"));
const mycli = new cliEngine_1.CliEngine();
mycli.registerCommands([
    //   GreetCommand,
    addCommand_1.default,
    subtractCommand_1.default,
    multiplyCommand_1.default,
    divideCommand_1.default,
    //   JokeCommand,
    countryCommand_1.default,
    pokemonCommand_1.default,
    //   MovieCommand,
    githubCommand_1.default
]);
mycli.run();
