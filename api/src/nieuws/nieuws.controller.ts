import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { NieuwsService } from './nieuws.service';
import {ApiBody, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";



@Controller('nieuws')
@ApiTags('Nieuws')
export class NieuwsController {
  constructor(private readonly nieuwsService: NieuwsService) {}

  @Post()
  @ApiOperation({ summary: 'Create record' })
  @ApiBody({ })
  create(@Body() body:any){
    return this.nieuwsService.create(body)
  }

  @Get()
  @ApiOperation({ summary: 'Get overview of news' })
  @ApiQuery({
    name: "take",
    type: Number,
    description: "take number of results. Optional",
    required: false
  })
  findAll(@Query("take") take?: number) {
    return this.nieuwsService.findAll(take)
  }

  @Get('overview')
  @ApiOperation({ summary: 'Get overview of news' })
  overview() {
    return this.nieuwsService.overview()
  }

  @Get('detail/:ID')
  @ApiOperation({summary: 'Find one by ID'})
  findOne(@Param('ID') id:string){
    return this.nieuwsService.findOne(id)
  }

}
