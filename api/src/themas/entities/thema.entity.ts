import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ThemaDocument = Thema & Document;

@Schema({strict: false , collection: 'themas'})
export class Thema {

    @Prop({type:String, alias:'bhs_themaid' })
    _id: string

}

export const ThemaSchema = SchemaFactory.createForClass(Thema)
