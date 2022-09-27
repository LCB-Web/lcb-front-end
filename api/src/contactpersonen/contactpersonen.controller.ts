import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactpersonenService } from './contactpersonen.service';
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('contactpersonen')
@ApiTags('Contactpersonen')
export class ContactpersonenController {
  constructor(private readonly contactpersonenService: ContactpersonenService) {}

  @Post()
  @ApiOperation({ summary: 'Create record' })
  @ApiBody({ })
  create(@Body() body:any){
    return this.contactpersonenService.create(body)
  }

}
