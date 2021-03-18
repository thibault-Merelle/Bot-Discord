import {Client, Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {MessageResponder} from "./services/message-responder";
import { logger } from "./setup.logger";

@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;
  private messageResponder: MessageResponder;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string,
    @inject(TYPES.MessageResponder) messageResponder: MessageResponder) {
    this.client = client;
    this.token = token;
    this.messageResponder = messageResponder;
  }

  public listen(): Promise<string> {
    this.client.on('message', (message: Message) => {
      if (message.author.bot) {
        logger.warn('Ignoring bot message!')
        return;
      }

      logger.info("Message received! Contents: ", message.content);

      this.messageResponder.handle(message).then(() => {
        logger.info("Response sent!");
      }).catch(() => {
        logger.error("Response not sent.")
      })
    });

    return this.client.login(this.token);
  }
}