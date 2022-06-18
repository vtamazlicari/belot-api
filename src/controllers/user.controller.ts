import { Get, Param, Post, Body, Delete, JsonController, Patch, Put } from 'routing-controllers';
import 'reflect-metadata';
import { Service } from 'typedi';
import { UserService } from '../services';
import { UserAttributes } from '../types';

@JsonController()
@Service()
export class UserController {

  constructor(private _userService: UserService) { }

  @Get('/users')
  getAll() {
    return this._userService.findAll();
  }

  @Post('/users')
  post(@Body() user: UserAttributes) {
    return this._userService.createOne(user);
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return this._userService.findOne(id);
  }

  @Put('/users/:id')
  patch(@Param('id') id: number, @Body() user: UserAttributes) {
    return this._userService.updateOne(id, user);
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return this._userService.deleteOne(id);
  }
}