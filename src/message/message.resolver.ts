import { Resolver, Query } from '@nestjs/graphql';
import { MessageService } from './message.service';
import { Message } from './message.entiry';

@Resolver((of) => Message)
export class MessageResolver {
  constructor(private messageService: MessageService) {}

  @Query((returns) => [Message])
  messages(): Promise<Message[]> {
    return this.messageService.findAll();
  }
}
