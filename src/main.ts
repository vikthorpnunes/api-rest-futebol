import {
    RequestMethod
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

    app.enableCors();

    app.setGlobalPrefix('api', {
        exclude: [{ path: 'health', method: RequestMethod.GET }],
    });

    const config = new DocumentBuilder()
        .setTitle('Futebol Service')
        .setDescription('Futebol Service endpoints')
        .setVersion('1.0')
        .addServer(process.env.HOST || 'http://localhost:3000')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    Promise.all([app.startAllMicroservices(), app.listen(3000)]);
}

bootstrap();
