import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Agenda, AgendaDocument} from "./entities/agenda.entity";
import {Connection, Model} from "mongoose";
import * as mongoose from "mongoose";

@Injectable()
export class AgendaService {
    constructor(
        @InjectModel(Agenda.name) private AgendaModel: Model<AgendaDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    schema = new mongoose.Schema({ },{strict:false});
    Overview = this.connection.model('view', this.schema,'AgendaOverzicht' ) ;


    async create(body:any){
        let createdAgenda = new this.AgendaModel(body)
        return await createdAgenda.save()
    }

    async findAll(take:number){
        let limit: number = take ? take : 1000
        return this.Overview.find().limit(limit)
    }
}
