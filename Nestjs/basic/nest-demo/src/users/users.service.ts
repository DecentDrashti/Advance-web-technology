import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  private users: User[] = [
    { id: 1, name: 'Jani d', email: 'jani@example.com', age: '20' },
    { id: 2, name: 'Jane sui', email: 'jane@example.com', age: '22' },
    { id: 3, name: 'Alice johny', email: 'alice@example.com', age: '19' },
  ];

  // CREATE
  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: this.users.length + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }

  // READ ALL
  findAll() {
    return this.users;
  }

  // READ ONE
  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }

  // UPDATE
  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    if (!user) {
      return { message: 'User not found' };
    }

    Object.assign(user, updateUserDto);
    return user;
  }

  // DELETE
  remove(id: number) {
    const index = this.users.findIndex(user => user.id === id);

    if (index === -1) {
      return { message: 'User not found' };
    }

    const deletedUser = this.users[index];
    this.users.splice(index, 1);

    return deletedUser;
  }
}