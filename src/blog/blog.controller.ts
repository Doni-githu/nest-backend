import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { BlogDto } from './dto/dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
    blog: BlogDto[]

    constructor(private readonly blogService: BlogService) {
        this.blog = [
            {
                id: 1,
                title: "Doni Post",
                excerpt: 'AWdadwa',
                description: 'awdadadadddddddddddddddddddddddd'
            },
            {
                id: 2,
                title: "Doni Post",
                excerpt: 'AWdadwa',
                description: 'awdadadadddddddddddddddddddddddd'
            },
            {
                id: 3,
                title: "Doni Post",
                excerpt: 'AWdadwa',
                description: 'awdadadadddddddddddddddddddddddd'
            },
        ]
    }

    @HttpCode(200)
    @Get()
    async getAll(@Req() request: Request) {
        return this.blogService.getAll()
    }
    
    
    @HttpCode(200)
    @Post()
    async create(@Body() dto: BlogDto) {
        return this.blogService.create(dto)
    }


    @HttpCode(200)
    @Get(':id')
    async getById(@Param('id') id: string) {
        return this.blogService.detail(id)
    }


    @HttpCode(201)
    @Patch(':id')
    async getByIdAndUpdate(@Param('id') id: string, @Body() dto: BlogDto) {
        return this.blogService.update(id, dto)
    }
    @HttpCode(200)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.blogService.delete(id)
    }
}
