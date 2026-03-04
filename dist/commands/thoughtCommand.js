"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const picocolors_1 = __importDefault(require("picocolors"));
const boxen_1 = __importDefault(require("boxen"));
class ThoughtCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("thought")
            .description("Shows an inspiring thought of the day")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://zenquotes.io/api/random");
                const quote = response.data[0];
                const thoughtInfo = [
                    `${picocolors_1.default.italic(picocolors_1.default.white(`"${quote.q}"`))}`,
                    ``,
                    `${picocolors_1.default.gray("—")} ${picocolors_1.default.cyan(picocolors_1.default.bold(quote.a))}`
                ].join("\n");
                console.log((0, boxen_1.default)(thoughtInfo, {
                    title: `💡 Thought of the Day`,
                    titleAlignment: 'center',
                    padding: 1,
                    margin: 1,
                    borderStyle: 'doubleSingle',
                    borderColor: 'yellow'
                }));
            }
            catch (error) {
                console.error(picocolors_1.default.red(`Error fetching thought: ${error.message}`));
            }
        });
    }
}
exports.default = ThoughtCommand;
