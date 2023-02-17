import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/Auth/auth.module';
import { PostsModule } from './modules/posts/posts.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/snaptoon'),
    PostsModule
  ],
  controllers: [
  ],
  providers: [
  ],
})
export class AppModule {}
