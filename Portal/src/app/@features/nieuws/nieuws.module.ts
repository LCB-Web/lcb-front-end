import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NieuwsRoutingModule } from './nieuws-routing.module';
import { NieuwsComponent } from './nieuws.component';
import { NieuwsDetailComponent } from './pages/nieuws-detail/nieuws-detail.component';
import {SharedModule} from "../../@shared/shared.module";


@NgModule({
  declarations: [
    NieuwsComponent,
    NieuwsDetailComponent
  ],
  imports: [
    CommonModule,
    NieuwsRoutingModule,
    SharedModule
  ]
})
export class NieuwsModule { }
