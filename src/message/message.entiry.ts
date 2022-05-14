import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Message {
  @Column()
  @Field()
  id: number;

  @Column()
  @Field()
  to: string;

  @Column()
  @Field()
  from: string;

  @Column()
  @Field()
  text: string;

  @Column()
  @Field()
  type: string;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  sent_at?: string;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  delivered_at?: string;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  read_at?: string;

  @Column({ type: 'datetime', nullable: true })
  @Field({ nullable: true })
  deleted_at?: string;
}
