import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Project, ProjectDocument} from "./entities/project.entity";
import {Connection, Model} from "mongoose";
import * as mongoose from "mongoose";


@Injectable()
export class ProjectenService {
    constructor(
        @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    schema = new mongoose.Schema({_id:String},{strict:false});
    Overview = this.connection.model('ProjectOverzicht', this.schema,'ProjectOverzicht' ) ;
    Detail = this.connection.model('ProjectDetail', this.schema, 'ProjectDetail')


    async create(body:any){
        let createdProject = new this.projectModel(body)
        return await createdProject.save()
    }

    async findAll(){
        return this.Overview.find()
    }

    async findOne(id:string){
        return this.Detail.findById(id)
    }
}
