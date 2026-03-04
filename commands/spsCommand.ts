import { Command } from "commander";
import pc from "picocolors";
import boxen from "boxen";

const choices = ["stone", "paper", "scissors"] as const;
type Choice = typeof choices[number];

const emojis: Record<Choice, string> = {
    stone: "🪨",
    paper: "📄",
    scissors: "✂️"
};

function getResult(player: Choice, computer: Choice): string {
    if (player === computer) return pc.yellow(pc.bold("🤝 Draw!"));
    if (
        (player === "stone" && computer === "scissors") ||
        (player === "paper" && computer === "stone") ||
        (player === "scissors" && computer === "paper")
    ) {
        return pc.green(pc.bold("🎉 You Win!"));
    }
    return pc.red(pc.bold("💀 You Lose!"));
}

class SpsCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("sps <choice>")
            .description("Play Stone Paper Scissors (stone | paper | scissors)")
            .action((choice: string) => {
                const playerChoice = choice.toLowerCase() as Choice;

                if (!choices.includes(playerChoice)) {
                    console.error(pc.red(`Invalid choice! Use: ${pc.bold("stone")}, ${pc.bold("paper")}, or ${pc.bold("scissors")}`));
                    return;
                }

                const computerChoice = choices[Math.floor(Math.random() * choices.length)];
                const result = getResult(playerChoice, computerChoice);

                const gameInfo = [
                    `${pc.cyan(pc.bold("You:"))}      ${emojis[playerChoice]}  ${pc.white(playerChoice)}`,
                    `${pc.magenta(pc.bold("Computer:"))} ${emojis[computerChoice]}  ${pc.white(computerChoice)}`,
                    ``,
                    `${result}`
                ].join("\n");

                console.log(
                    boxen(gameInfo, {
                        title: `🎮 Stone Paper Scissors`,
                        titleAlignment: 'center',
                        padding: 1,
                        margin: 1,
                        borderStyle: 'round',
                        borderColor: 'cyan'
                    })
                );
            });
    }
}

export default SpsCommand;
