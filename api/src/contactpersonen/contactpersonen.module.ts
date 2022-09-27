import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {contactpersonen, contactpersonenSchema} from "./entities/contactpersonen.entity";
import { ContactpersonenService } from './contactpersonen.service';
import { ContactpersonenController } from './contactpersonen.controller';

@Module({
  imports: [ MongooseModule.forFeature([{name: contactpersonen.name, schema: contactpersonenSchema}]),],
  controllers: [ContactpersonenController],
  providers: [ContactpersonenService]
})
export class ContactpersonenModule {}
