import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Nieuws, NieuwsSchema} from "./entities/nieuws.entity";
import { NieuwsService } from './nieuws.service';
import { NieuwsController } from './nieuws.controller';

@Module({
  imports:[ MongooseModule.forFeature([{name:Nieuws.name, schema: NieuwsSchema }])],
  controllers: [NieuwsController],
  providers: [NieuwsService]
})
export class NieuwsModule {}
