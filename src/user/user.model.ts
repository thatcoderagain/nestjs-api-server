import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  sex: {
    type: String,
    require: true,
  },
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  age: number;
  sex: string;
}
