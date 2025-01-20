import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];

  findAll(role?: CreateUserDto['role']) {
    if (role) {
      const rolesArray = this.users.filter((user) => user.role === role);
      if (rolesArray.length === 0) {
        throw new NotFoundException('Role does not exist!')
      }
      return rolesArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id)
    if(!user) {
      throw new NotFoundException ('User not found!');
    }
    return user;
  }

  create(user: CreateUserDto) {
    const newUserId = this.users.length + 1;
    const newUser = {
      id: newUserId,
      ...user,
    };

    this.users.push(newUser);

    return this.users;
  }

  update(id: number, userUpdate: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error(`User with id ${id} not found`);
    }

    this.users[index] = {
      ...this.users[index],
      ...userUpdate,
    };

    return this.users[index];
  }

  delete(id: number) {
    this.users = this.users.filter(user => user.id !== id)
    
    return this.users;
  }
}
