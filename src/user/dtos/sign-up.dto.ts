import { BaseOutputDto } from './../../common/dtos/core.dto'
import { UserEntity } from './../entites/user.entity'
import { PickType } from '@nestjs/swagger'

export class UserSignUpInputDto extends PickType(UserEntity, [
  'username',
  'password',
]) {}

export class UserSignUpOutputDto extends BaseOutputDto {}
