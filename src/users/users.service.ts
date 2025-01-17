import { Injectable } from '@nestjs/common';
import { USER } from './user.model';

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

  findAll(role?: USER['role']) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: USER) {
    const newUserId = this.users.length + 1;
    const newUser = {
      id: newUserId,
      ...user,
    };

    this.users.push(newUser);

    return this.users;
  }

  update(id: number, userUpdate: Partial<USER>) {
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
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new Error(`User with id ${id} not found`);
    }

    this.users.splice(index, 1);
    return this.users;
  }
}
