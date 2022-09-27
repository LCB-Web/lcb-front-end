import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {documenten, DocSchema} from "./entities/documenten.entity";
import { DocumentenService } from './documenten.service';
import { DocumentenController } from './documenten.controller';


@Module({
  imports:[ MongooseModule.forFeature([{name:documenten.name, schema: DocSchema }]) ],
  controllers: [DocumentenController],
  providers: [DocumentenService]
})
export class DocumentenModule {}
