#!/usr/bin/env node
import { CliEngine } from "./cli_engine/cliEngine";
import GreetCommand from "./commands/greetCommand";
import AddCommand from "./commands/addCommand";
import SubtractCommand from "./commands/subtractCommand";
import MultiplyCommand from "./commands/multiplyCommand";
import DivideCommand from "./commands/divideCommand";

import CountryCommand from "./commands/countryCommand";
import PokemonCommand from "./commands/pokemonCommand";

import GithubCommand from "./commands/githubCommand";
import ThoughtCommand from "./commands/thoughtCommand";
import SpsCommand from "./commands/spsCommand";

const mycli = new CliEngine();

mycli.registerCommands([
    GreetCommand,
    AddCommand,
    SubtractCommand,
    MultiplyCommand,
    DivideCommand,

    CountryCommand,
    PokemonCommand,

    GithubCommand,
    ThoughtCommand,
    SpsCommand
]);

mycli.run();