import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectenRoutingModule } from './projecten-routing.module';
import { ProjectenComponent } from './projecten.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import {SharedModule} from "../../@shared/shared.module";


@NgModule({
  declarations: [
    ProjectenComponent,
    ProjectDetailComponent
  ],
    imports: [
        CommonModule,
        ProjectenRoutingModule,
        SharedModule
    ]
})
export class ProjectenModule { }
