import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BlogType = HydratedDocument<Blog>;

@Schema({ timestamps: true })
export class Blog {
    @Prop({ required: true })
    title: string;
    
    @Prop({ required: true })
    excerpt: string;

    @Prop({ required: true })
    description: string;

    @Prop() 
    slug: string
}

export const BlogSchema = SchemaFactory.createForClass(Blog)