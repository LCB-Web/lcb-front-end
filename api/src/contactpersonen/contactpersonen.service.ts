import { Injectable } from '@nestjs/common';
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {contactpersonen, contactpersonenDocument} from "./entities/contactpersonen.entity";
import {Connection, Model} from "mongoose";



@Injectable()
export class ContactpersonenService {
    constructor(
        @InjectModel(contactpersonen.name) private contactpersoonModel: Model<contactpersonenDocument>,
        @InjectConnection() private connection: Connection
    ) {}


    async create(body:any){
        let createdUser = new this.contactpersoonModel(body)
        return await createdUser.save()
    }

}
