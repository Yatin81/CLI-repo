"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const picocolors_1 = __importDefault(require("picocolors"));
const boxen_1 = __importDefault(require("boxen"));
const choices = ["stone", "paper", "scissors"];
const emojis = {
    stone: "🪨",
    paper: "📄",
    scissors: "✂️"
};
function getResult(player, computer) {
    if (player === computer)
        return picocolors_1.default.yellow(picocolors_1.default.bold("🤝 Draw!"));
    if ((player === "stone" && computer === "scissors") ||
        (player === "paper" && computer === "stone") ||
        (player === "scissors" && computer === "paper")) {
        return picocolors_1.default.green(picocolors_1.default.bold("🎉 You Win!"));
    }
    return picocolors_1.default.red(picocolors_1.default.bold("💀 You Lose!"));
}
class SpsCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("sps <choice>")
            .description("Play Stone Paper Scissors (stone | paper | scissors)")
            .action((choice) => {
            const playerChoice = choice.toLowerCase();
            if (!choices.includes(playerChoice)) {
                console.error(picocolors_1.default.red(`Invalid choice! Use: ${picocolors_1.default.bold("stone")}, ${picocolors_1.default.bold("paper")}, or ${picocolors_1.default.bold("scissors")}`));
                return;
            }
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = getResult(playerChoice, computerChoice);
            const gameInfo = [
                `${picocolors_1.default.cyan(picocolors_1.default.bold("You:"))}      ${emojis[playerChoice]}  ${picocolors_1.default.white(playerChoice)}`,
                `${picocolors_1.default.magenta(picocolors_1.default.bold("Computer:"))} ${emojis[computerChoice]}  ${picocolors_1.default.white(computerChoice)}`,
                ``,
                `${result}`
            ].join("\n");
            console.log((0, boxen_1.default)(gameInfo, {
                title: `🎮 Stone Paper Scissors`,
                titleAlignment: 'center',
                padding: 1,
                margin: 1,
                borderStyle: 'round',
                borderColor: 'cyan'
            }));
        });
    }
}
exports.default = SpsCommand;
