import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({strict: false, collection:'projecten'})
export class Project {

    @Prop({type:String, alias:'bhs_projectid' })
    _id: string

}

export const ProjectSchema = SchemaFactory.createForClass(Project)
