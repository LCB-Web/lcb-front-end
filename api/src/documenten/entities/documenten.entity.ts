import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type docDocument = documenten & Document;

@Schema({strict: false, collection:'documenten'})
export class documenten {

    @Prop({type:String, alias:'lcb_documentenid' })
    _id: string

}

export const DocSchema = SchemaFactory.createForClass(documenten)
