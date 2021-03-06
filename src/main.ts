import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)

  const port = configService.get('APP_PORT')

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('APP')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('API')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  app.useGlobalPipes()

  await app.listen(port)
}
bootstrap()
