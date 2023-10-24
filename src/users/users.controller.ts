import { UserService } from './users.service';
import { Req, Res } from '@nestjs/common';

export class UserController {
  constructor(private readonly userService: UserService) {}

  async getAllUsers(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<any> {
    try {
    } catch (err) {}
  }
}
