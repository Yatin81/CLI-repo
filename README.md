#  MyCLI

A fun and colorful command-line tool built with **TypeScript**, **Commander.js**, and **Picocolors**. Packed with utility commands, mini-games, and API-powered features — all in your terminal!

## Installation

```bash
git clone https://github.com/Yatin81/CLI-repo.git
cd CLI-repo
npm install
npm run build
npm link
```

Now you can use `mycli` from anywhere in your terminal.

##  Commands

| Command | Description | Usage |
|---------|-------------|-------|
| `greet <name>` | Greets the user by name | `mycli greet Yatin` |
| `add <a> <b>` | Adds two numbers | `mycli add 5 3` |
| `subtract <a> <b>` | Subtracts two numbers | `mycli subtract 10 4` |
| `multiply <a> <b>` | Multiplies two numbers | `mycli multiply 6 7` |
| `divide <a> <b>` | Divides two numbers | `mycli divide 20 5` |
| `country bata` | Tells a random country name | `mycli country bata` |
| `pokemon <name>` | Fetches Pokémon info | `mycli pokemon pikachu` |
| `github <username>` | Fetches GitHub user info | `mycli github Yatin81` |
| `thought` | Shows an inspiring thought of the day | `mycli thought` |
| `sps <choice>` | Play Stone Paper Scissors | `mycli sps stone` |

## 🎮 Examples

```bash
# Math operations
mycli add 12 8
mycli divide 100 25

# API-powered commands
mycli country bata
mycli pokemon charizard
mycli github torvalds
mycli thought

# Play a game!
mycli sps paper
```

## Tech Stack

- **TypeScript** — Type-safe development
- **Commander.js** — Command parsing & CLI framework
- **Axios** — HTTP requests to external APIs
- **Picocolors** — Terminal color output
- **Boxen** — Styled terminal boxes

## 📁 Project Structure

```
CLI-repo/
├── cli.ts                  # Entry point — registers all commands
├── cli_engine/
│   └── cliEngine.ts        # Core CLI engine
├── commands/
│   ├── greetCommand.ts     # Greet command
│   ├── addCommand.ts       # Add command
│   ├── subtractCommand.ts  # Subtract command
│   ├── multiplyCommand.ts  # Multiply command
│   ├── divideCommand.ts    # Divide command
│   ├── countryCommand.ts   # Random country (REST Countries API)
│   ├── pokemonCommand.ts   # Pokémon info (PokéAPI)
│   ├── githubCommand.ts    # GitHub user info (GitHub API)
│   ├── thoughtCommand.ts   # Thought of the day (ZenQuotes API)
│   └── spsCommand.ts       # Stone Paper Scissors game
├── tsconfig.json
└── package.json
```

## 🔧 Development

```bash

npm run build


npm start -- <command>

## 📝 License

ISC
