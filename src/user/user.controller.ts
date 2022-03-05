import { UserSignUpInputDto } from './dtos/sign-up.dto'
import { Body, Controller, Post, Res } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import { Response } from 'express'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiTags('User')
  async create(
    @Body() userSignUpInputDto: UserSignUpInputDto,
    @Res() res: Response,
  ) {
    const { access, errorMessage } = await this.userService.create(
      userSignUpInputDto,
    )
    if (!access && errorMessage) {
      return res.status(400).json({
        access,
        errorMessage,
      })
    }
    return res.status(200).json({
      access,
    })
  }
}
