import { TypeOrmModuleOptions } from '@nestjs/typeorm'

function TypeOrmConfig(): TypeOrmModuleOptions {
  const commonConfig = {
    SYNCRONIZE: false,
    ENTITES: [__dirname + '/*/entites/*.entity{.ts,.js}'],
    MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
    CLI: {
      migrationsDir: 'src/migrations',
    },
    MIGRATIONS_RUN: false,
  }

  const ormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'woong',
    password: '12345',
    database: 'test',
    entities: commonConfig.ENTITES,
    synchronize: commonConfig.SYNCRONIZE,
    logging: true,
    migrations: commonConfig.MIGRATIONS,
    cli: commonConfig.CLI,
    migrationsRun: commonConfig.MIGRATIONS_RUN,
  }

  return ormConfig
}

export { TypeOrmConfig }
