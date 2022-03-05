import { UserSignUpInputDto, UserSignUpOutputDto } from './dtos/sign-up.dto'
import { UserEntity } from './entites/user.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly user: Repository<UserEntity>,
  ) {}

  async create({
    username,
    password,
  }: UserSignUpInputDto): Promise<UserSignUpOutputDto> {
    try {
      const user = await this.user.findOne({ username })
      if (user) {
        return {
          access: false,
          errorMessage: 'Username already exists.',
        }
      }
      await this.user.save(
        this.user.create({
          username,
          password,
        }),
      )
      return {
        access: true,
      }
    } catch (error) {
      return {
        access: false,
        errorMessage: error.message,
      }
    }
  }
}
