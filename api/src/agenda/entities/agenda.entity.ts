import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AgendaDocument = Agenda & Document;

@Schema({strict: false, collection:'agenda'})
export class Agenda {

    @Prop({type:String, alias:'msevtmgt_eventid' })
    _id: string

    @Prop({type:Date })
    msevtmgt_eventstartdate: Date

}

export const AgendaSchema = SchemaFactory.createForClass(Agenda)
