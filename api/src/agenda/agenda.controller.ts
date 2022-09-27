import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { AgendaService } from './agenda.service';
import {ApiBody, ApiOperation, ApiQuery, ApiTags} from "@nestjs/swagger";

@Controller('agenda')
@ApiTags('Agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  @ApiOperation({ summary: 'Create record' })
  @ApiBody({ })
  create(@Body() body:any){
    return this.agendaService.create(body)
  }


  @Get()
  @ApiOperation({ summary: 'Get overview of agenda' })
  @ApiQuery({
    name: "take",
    type: Number,
    description: "take number of results. Optional",
    required: false
  })
  overview(@Query("take") take?: number){
    return this.agendaService.findAll(take)
  }

}
