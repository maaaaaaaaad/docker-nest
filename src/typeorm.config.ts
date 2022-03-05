import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const ormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'woong',
  password: '12345',
  database: 'test',
  entities: [__dirname + '/*/entites/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  migrationsRun: false,
}

export = ormConfig
