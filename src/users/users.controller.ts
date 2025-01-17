import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { USER } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGENEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() user: USER) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: USER) {
    return this.usersService.update(Number(id), userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(Number(id)); // Convert id to a number
  }
}
