import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { ProjectenService } from './projecten.service';
import {ApiBody, ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('projecten')
@ApiTags('Projecten')
export class ProjectenController {
  constructor(private readonly projectenService: ProjectenService) {}


  @Post()
  @ApiOperation({ summary: 'Create record' })
  @ApiBody({ })
  create(@Body() body:any){
    return this.projectenService.create(body)
  }

  @Get()
  @ApiOperation({summary:'get Overview'})
  findAll(){
    return this.projectenService.findAll()

  }

  @Get(':ID')
  @ApiOperation({summary: 'Find one by ID'})
  findOne(@Param('ID') id:string){
    return this.projectenService.findOne(id)
  }
}
