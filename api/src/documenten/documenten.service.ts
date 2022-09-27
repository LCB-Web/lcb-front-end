import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {docDocument, documenten} from "./entities/documenten.entity";
import {Connection, Model} from "mongoose";


@Injectable()
export class DocumentenService {
    constructor(
        @InjectModel(documenten.name) private documentModel: Model<docDocument>,
        @InjectConnection() private connection: Connection,
    ) {}


    async create(body:any){
        body['lcb_documenten_Annotations']['documentbody'] =''
        let createdDocument = new this.documentModel(body)
        return await createdDocument.save()
    }




}
