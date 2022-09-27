import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutRoutingModule} from "./about-routing.module";
import { OnsVerhaalComponent } from './pages/ons-verhaal/ons-verhaal.component';
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [
    OnsVerhaalComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        NgbAccordionModule
    ]
})
export class AboutModule { }
