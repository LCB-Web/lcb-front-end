import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Afbeeldingen} from "../../afbeeldingen/entities/afbeeldingen.entity";

export type NieuwsDocument = Nieuws & Document;

@Schema({strict: false, collection:'nieuws'})
export class Nieuws {

    @Prop({type:String, alias:'bhs_nieuwsid' })
    _id: string



}

export const NieuwsSchema = SchemaFactory.createForClass(Nieuws)
