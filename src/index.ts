require('dotenv').config(); // Recommended way of loading dotenv
import container from "./inversify.config";
import {TYPES} from "./types";
import {Bot} from "./bot";
import {logger} from "./setup.logger"


let bot = container.get<Bot>(TYPES.Bot);

bot.listen().then(() => {
  logger.info('Logged in!')
}).catch((error) => {
  logger.error('Oh no! ', error)
});