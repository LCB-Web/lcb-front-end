import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentenService } from './documenten.service';
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('documenten')
@ApiTags('Documenten')
export class DocumentenController {
  constructor(private readonly documentenService: DocumentenService) {}

  @Post()
  @ApiOperation({ summary: 'Create record' })
  @ApiBody({ })
  create(@Body() body:any){
    return this.documentenService.create(body)
  }


}
