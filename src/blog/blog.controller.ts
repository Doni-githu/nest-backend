import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { BlogDto } from './dto/dto';
import { BlogService } from './blog.service';
@Controller('blog')
export class BlogController {

    constructor(private readonly blogService: BlogService) { }

    @HttpCode(200)
    @Get()
    async getAll(@Req() request: Request) {
        return this.blogService.getAll()
    }


    @HttpCode(200)
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() dto: BlogDto) {
        function slugify(txt: string): string {
            return txt
            .toString()
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        }

        const blog = {
            ...dto,
            slug: slugify(dto.title)
        }

        this.blogService.create(blog)
        return {
            message: 'Success create'
        }
    }


    @HttpCode(200)
    @Get(':slug')
    async getById(@Param('slug') slug: string) {
        return this.blogService.detail(slug)
    }


    @HttpCode(201)
    @Put(':slug')
    async getByIdAndUpdate(@Param('slug') slug: string, @Body() dto: BlogDto) {
        this.blogService.update(slug, dto)
        return {
            message: 'Success Update'
        }
    }
    @HttpCode(200)
    @Delete(':slug')
    async delete(@Param('slug') slug: string) {
        this.blogService.delete(slug)
        return {
            message: 'Success delete'
        }
    }
}
