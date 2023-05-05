import {
    MiddlewareConsumer,
    Module
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './system/database/connection';

@Module({
    imports: [
        TypeOrmModule.forRoot(dbConfig),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
    }
}
