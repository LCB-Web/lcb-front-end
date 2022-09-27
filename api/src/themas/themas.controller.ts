import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThemasService } from './themas.service';
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";


@Controller('themas')
@ApiTags('Thema')
export class ThemasController {
  constructor(private readonly themasService: ThemasService) {}

  @Post()
  @ApiOperation({ summary: 'Create record' })
  @ApiBody({ })
  create(@Body() body:any){
    return this.themasService.create(body)
  }

  @Get()
  @ApiOperation({ summary: 'Get overview of themas' })
  overview(){
    return this.themasService.overview()
  }

  @Get(':ID')
  @ApiOperation({summary: 'find one by ID'})
  findOne(@Param('ID') id:string) {
    return this.themasService.findOne(id)
  }



}
