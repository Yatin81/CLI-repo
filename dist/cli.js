#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cliEngine_1 = require("./cli_engine/cliEngine");
// import GreetCommand from "./commands/greetCommand";
const addCommand_1 = __importDefault(require("./commands/addCommand"));
// import SubtractCommand from "./commands/subtractCommand";
// import MultiplyCommand from "./commands/multiplyCommand";
// import DivideCommand from "./commands/divideCommand";
// import JokeCommand from "./commands/jokeCommand";
const countryCommand_1 = __importDefault(require("./commands/countryCommand"));
// import PokemonCommand from "./commands/pokemonCommand";
// import MovieCommand from "./commands/movieCommand";
// import GithubCommand from "./commands/githubCommand";
const mycli = new cliEngine_1.CliEngine();
mycli.registerCommands([
    //   GreetCommand,
    addCommand_1.default,
    //   SubtractCommand,
    //   MultiplyCommand,
    //   DivideCommand,
    //   JokeCommand,
    countryCommand_1.default,
    //   PokemonCommand,
    //   MovieCommand,
    //   GithubCommand
]);
mycli.run();
