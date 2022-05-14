import { Injectable } from '@nestjs/common';
import { Message } from './message.entiry';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageInput } from './dto/create-message-input';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}

  createMessage(createMessageInput: CreateMessageInput): Promise<Message> {
    const newMessage = this.messageRepository.create(createMessageInput: CreateMessageInput);
    return this.messageRepository.save(newMessage);
  }

  async findAll(): Promise<Message[]> {
    return await this.messageRepository.find();
  }
}
