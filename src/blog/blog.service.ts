import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/dto';

@Injectable()
export class BlogService {
    blog: BlogDto[]

    constructor() {
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

    async getAll() {
        return this.blog;
    }

    async detail(id: string) {
        return this.blog.find((item) => item.id === parseInt(id))
    }

    async create(dto: BlogDto) {
        const data: BlogDto = {
            id: Date.now(),
            ...dto
        }
        return [...this.blog, data]
    }

    async update(id: string, dto: BlogDto) {
        let Found = this.blog.find((item) => item.id === parseInt(id))

        Found = dto

        return Found
    }

    async delete(id: string) {
        return this.blog.filter((item) => item.id !== parseInt(id))
    }
}
