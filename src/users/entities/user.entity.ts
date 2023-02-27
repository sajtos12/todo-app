/* import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop({ type: Number, auto: true })
  id: number;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User); */

import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  username: string;

  @Column({ default: false })
  password: boolean;
}
