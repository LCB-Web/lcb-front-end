import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Nieuws, NieuwsDocument} from "./entities/nieuws.entity";
import {Connection, Model} from "mongoose";
import * as mongoose from "mongoose";



@Injectable()
export class NieuwsService {
    constructor(
        @InjectModel(Nieuws.name) private nieuwsModel: Model<NieuwsDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    schema = new mongoose.Schema({_id:String},{strict:false});
    Overview = this.connection.model('NieuwsOverzicht', this.schema,'NieuwsOverzicht' ) ;
    Detail = this.connection.model('NieuwsDetail', this.schema, 'NieuwsDetail')

    async create(body:any){
        let createdNieuws = new this.nieuwsModel(body)
        return await createdNieuws.save()
    }

    async overview(){
        return this.Overview.find().limit(3)
    }

    async findOne(id:string){
        return this.Detail.findById(id)
    }

    async findAll(take:number){
        let limit: number = take ? take : 1000
        return this.Overview.find().limit(limit)
    }
}
