import { Injectable } from '@nestjs/common';
import {Connection, Model} from "mongoose";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Thema, ThemaDocument} from "./entities/thema.entity";
import * as mongoose from "mongoose";

@Injectable()
export class ThemasService {
    constructor(
        @InjectModel(Thema.name) private themaModel: Model<ThemaDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    schema = new mongoose.Schema({_id:String},{strict:false});
    Overview = this.connection.model('view', this.schema,'ThemaOverzicht' ) ;
    Detail = this.connection.model('ThemaDetail', this.schema, 'ThemaDetail')


    async create(body:any){
        let createdThema = new this.themaModel(body)
        return await createdThema.save()
    }

    async overview(){
        return this.Overview.find()
    }

    async findOne(id:string){
        return this.Detail.findById(id)
    }

}
