import "reflect-metadata";
import 'mocha';
import { PingFinder } from "../src/services/ping-finder";
import { MessageResponder } from "../src/services/message-responder";
import {instance, mock, verify, when} from "ts-mockito";
import {Message} from "discord.js";

describe('MessageResponder', () => {
  let mockedPingFinderClass: PingFinder;
  let mockedPingFinderInstance: PingFinder;
  let mockedMessageClass: Message;
  let mockedMessageInstance: Message;

  let service: MessageResponder;

  beforeEach(() => {
    mockedPingFinderClass = mock(PingFinder);
    mockedPingFinderInstance = instance(mockedPingFinderClass);
    mockedMessageClass = mock(Message);
    mockedMessageInstance = instance(mockedMessageClass);
    setMessageContents();
    service = new MessageResponder(mockedPingFinderInstance);
  })

  it('should reply', async () => {
    whenIsPingThenReturn(true);
<<<<<<< HEAD
    await service.handle(mockedMessageInstance);
=======

    await service.handle(mockedMessageInstance);

>>>>>>> dev
    verify(mockedMessageClass.reply('hello user')).once();
  })

  it('should reply', async () => {
      whenIsTestWordThenReturn(true);
      await service.handle(mockedMessageInstance);
      verify(mockedMessageClass.reply('bye')).once()
    //   verify(mockedMessageClass.reply('hello ' + message.author.username)).once()
  })

  function setMessageContents() {
    mockedMessageInstance.content = "Non-empty string";
  }

  function whenIsPingThenReturn(result: boolean) {
    when(mockedPingFinderClass.isPing("Non-empty string")).thenReturn(result);
  }

  function whenIsTestWordThenReturn(result: boolean) {
      when(mockedPingFinderClass.isTestWord("Non-empty string")).thenReturn(result);
  }
});