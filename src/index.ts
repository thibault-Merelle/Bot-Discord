require('dotenv').config(); // Recommended way of loading dotenv
import container from "./inversify.config";
import {TYPES} from "./types";
import {Bot} from "./bot";
import { ILogObject, Logger } from "tslog";
import { appendFileSync } from 'fs';

function logToFile(logObject: ILogObject) {
  appendFileSync("logs/logs.txt", JSON.stringify(logObject) + "\n");
}

export const logger: Logger = new Logger();
logger.attachTransport(
  {
    silly: logToFile,
    debug: logToFile,
    trace: logToFile,
    info: logToFile,
    warn: logToFile,
    error: logToFile,
    fatal: logToFile,
  },
  "debug"
);


let bot = container.get<Bot>(TYPES.Bot);

bot.listen().then(() => {
  logger.info('Logged in!')
}).catch((error) => {
  logger.error('Oh no! ', error)
});