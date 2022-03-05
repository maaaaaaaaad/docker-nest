import { CoreEntity } from 'src/common/entites/core.entity'
import { Column, Entity } from 'typeorm'

@Entity()
export class UserEntity extends CoreEntity {
  @Column({ type: 'varchar' })
  username: string

  @Column({ type: 'varchar' })
  password: string
}
