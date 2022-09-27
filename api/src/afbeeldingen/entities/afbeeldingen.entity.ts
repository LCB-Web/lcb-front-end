import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AfbeeldingenDocument = Afbeeldingen & Document;


@Schema({strict: false, collection:'afbeeldingen'})
export class Afbeeldingen {

    @Prop({type:String, alias:'msdyncrm_fileid' })
    _id: string


}

export const AfbeeldingenSchema = SchemaFactory.createForClass(Afbeeldingen)
