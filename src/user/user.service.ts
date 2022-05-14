import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async insertUser(name: string, age: number, sex: string) {
    const id = Math.random().toString();
    const newUser = new this.UserModel({ id, name, age, sex });
    const result = await newUser.save();
    return result.id as string;
  }

  async getUsers() {
    const users = await this.UserModel.find().exec();
    return users as User[];
  }

  async getSingleUser(id: string) {
    const user = await this.findUser(id);
    return user;
  }

  async updateUser(id: string, name: string, age: number, sex: string) {
    const user = await this.findUser(id);
    if (name) {
      user.name = name;
    }
    if (age) {
      user.age = age;
    }
    if (sex) {
      user.sex = sex;
    }
    await user.save();
  }

  async removeUser(id: string) {
    const result = await this.UserModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find user.');
    }
    return null;
  }

  private async findUser(id: string): Promise<User> {
    let user;
    try {
      user = await this.UserModel.findById(id).exec();
    } catch (exception) {
      throw new NotFoundException('Not a valid id.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }
}
