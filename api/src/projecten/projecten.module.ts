import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Project, ProjectSchema} from "./entities/project.entity";
import { ProjectenService } from './projecten.service';
import { ProjectenController } from './projecten.controller';

@Module({
  imports:[ MongooseModule.forFeature([{name:Project.name, schema: ProjectSchema }])],
  controllers: [ProjectenController],
  providers: [ProjectenService]
})
export class ProjectenModule {}
