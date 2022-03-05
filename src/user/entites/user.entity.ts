import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'
import { CoreEntity } from 'src/common/entites/core.entity'
import { Column, Entity } from 'typeorm'

@Entity({ name: 'user' })
export class UserEntity extends CoreEntity {
  @Column({ type: 'varchar' })
  @ApiProperty({ name: 'username', example: 'mad' })
  @IsString()
  username: string

  @ApiProperty({ name: 'password', example: '12345' })
  @IsString()
  @Column({ type: 'varchar' })
  password: string
}
