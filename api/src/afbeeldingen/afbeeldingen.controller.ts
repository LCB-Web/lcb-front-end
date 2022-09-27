import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AfbeeldingenService } from './afbeeldingen.service';
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";


@Controller('afbeeldingen')
@ApiTags('Afbeeldingen')
export class AfbeeldingenController {
  constructor(private readonly afbeeldingenService: AfbeeldingenService) {}

  @Post()
  @ApiOperation({ summary: 'Create record' })
  @ApiBody({ })
  create(@Body() body:any){
    return this.afbeeldingenService.create(body)
  }

}
