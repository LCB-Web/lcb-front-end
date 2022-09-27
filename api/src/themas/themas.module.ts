import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Thema, ThemaSchema} from "./entities/thema.entity";
import { ThemasService } from './themas.service';
import { ThemasController } from './themas.controller';

@Module({
  imports: [ MongooseModule.forFeature([{name:Thema.name, schema: ThemaSchema }])],
  controllers: [ThemasController],
  providers: [ThemasService]
})
export class ThemasModule {}
