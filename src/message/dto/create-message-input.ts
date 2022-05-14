import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMessageInput {
  @Field()
  id: string;

  @Field()
  to: string;

  @Field()
  from: string;

  @Field()
  text: string;

  @Field()
  type: string;

  @Field({ nullable: true })
  sent_at?: string;

  @Field({ nullable: true })
  delivered_at?: string;

  @Field({ nullable: true })
  read_at?: string;

  @Field({ nullable: true })
  deleted_at?: string;
}
