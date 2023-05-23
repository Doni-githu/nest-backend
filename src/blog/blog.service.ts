import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/dto';
import { Blog, BlogType } from './blog.schema';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose"
@Injectable()
export class BlogService {

    constructor(@InjectModel(Blog.name) private blogModel: Model<BlogType>) { }

    async getAll() {
        return this.blogModel.find()
    }

    async detail(slug: string) {
        return this.blogModel.findOne({ slug })
    }

    async create(dto: BlogDto) {
        const haveTitle = await this.blogModel.findOne({ title: dto.title })

        if (haveTitle) {
            return {
                message: 'your title are using'
            }
        }

        return this.blogModel.create(dto)
    }

    async update(slug: string, dto: BlogDto) {
        return this.blogModel.findOneAndUpdate({ slug }, dto)
    }

    async delete(slug: string) {
        return this.blogModel.findOneAndRemove({ slug })
    }
}
