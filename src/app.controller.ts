import { Controller, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, } from "express"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  getHello(@Req() request: Request): string {
    const { name, email, password } = request.body
    return this.appService.getHello();
  }
}
