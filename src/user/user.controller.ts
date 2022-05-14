import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userService.getSingleUser(id);
  }

  @Post()
  async addUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('sex') sex: string,
  ) {
    const userId = await this.userService.insertUser(name, age, sex);
    return { id: userId };
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('sex') sex: string,
  ) {
    await this.userService.updateUser(id, name, age, sex);
    return { message: 'User has been updated.' };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.removeUser(id);
    return { message: 'User has been removed.' };
  }
}
