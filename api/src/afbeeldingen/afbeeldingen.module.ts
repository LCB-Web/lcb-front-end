import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Afbeeldingen, AfbeeldingenSchema} from "./entities/afbeeldingen.entity";
import { AfbeeldingenService } from './afbeeldingen.service';
import { AfbeeldingenController } from './afbeeldingen.controller';

@Module({
  imports:[ MongooseModule.forFeature([{name:Afbeeldingen.name, schema: AfbeeldingenSchema }])],
  controllers: [AfbeeldingenController],
  providers: [AfbeeldingenService]
})
export class AfbeeldingenModule {}
