import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Afbeeldingen, AfbeeldingenDocument} from "./entities/afbeeldingen.entity";
import {Connection, Model} from "mongoose";



@Injectable()
export class AfbeeldingenService {
    constructor(
        @InjectModel(Afbeeldingen.name) private AfbeeldingenModel: Model<AfbeeldingenDocument>,
        @InjectConnection() private connection: Connection
    ) {}

    async create(body:any){
        let createdAfbeeldingen = new this.AfbeeldingenModel(body)
        return await createdAfbeeldingen.save()
    }

}
