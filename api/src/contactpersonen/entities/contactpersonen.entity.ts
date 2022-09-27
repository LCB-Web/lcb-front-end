import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type contactpersonenDocument = contactpersonen & Document;

@Schema({strict: false, collection: 'contactpersonen'})
export class contactpersonen {

    @Prop({type:String, alias:'contactid' })
    _id: string

}

export const contactpersonenSchema = SchemaFactory.createForClass(contactpersonen);
