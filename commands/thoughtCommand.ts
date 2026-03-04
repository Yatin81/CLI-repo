import { Command } from "commander";
import axios from "axios";
import pc from "picocolors";
import boxen from "boxen";

class ThoughtCommand {
    program: Command;

    constructor(program: Command) {
        this.program = program;
    }

    register() {
        this.program.command("thought")
            .description("Shows an inspiring thought of the day")
            .action(async () => {
                try {
                    const response = await axios.get("https://zenquotes.io/api/random");
                    const quote = response.data[0];

                    const thoughtInfo = [
                        `${pc.italic(pc.white(`"${quote.q}"`))}`,
                        ``,
                        `${pc.gray("—")} ${pc.cyan(pc.bold(quote.a))}`
                    ].join("\n");

                    console.log(
                        boxen(thoughtInfo, {
                            title: `💡 Thought of the Day`,
                            titleAlignment: 'center',
                            padding: 1,
                            margin: 1,
                            borderStyle: 'doubleSingle',
                            borderColor: 'yellow'
                        })
                    );

                } catch (error: any) {
                    console.error(pc.red(`Error fetching thought: ${error.message}`));
                }
            });
    }
}

export default ThoughtCommand;
