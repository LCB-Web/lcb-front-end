import {Module, OnModuleInit} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemasModule } from './themas/themas.module';
import { ProjectenModule } from './projecten/projecten.module';
import { NieuwsModule } from './nieuws/nieuws.module';
import { AgendaModule } from './agenda/agenda.module';
import { DocumentenModule } from './documenten/documenten.module';
import { AfbeeldingenModule } from './afbeeldingen/afbeeldingen.module';
import { ContactpersonenModule } from './contactpersonen/contactpersonen.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://dbUser:dbPwd@mongo:27017/DB_test`),
    ThemasModule,
    ProjectenModule,
    NieuwsModule,
    AgendaModule,
    DocumentenModule,
    AfbeeldingenModule,
    ContactpersonenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(private service:AppService) {}
  onModuleInit(): any {
    this.service.generateViews().then()
  }

}
