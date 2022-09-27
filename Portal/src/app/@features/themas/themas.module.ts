import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemasRoutingModule } from './themas-routing.module';
import {ThemaComponent} from "./thema.component";
import {SharedModule} from "../../@shared/shared.module";
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [ThemaComponent],
    imports: [
        CommonModule,
        ThemasRoutingModule,
        SharedModule,
        NgbNavModule
    ]
})
export class ThemasModule { }
