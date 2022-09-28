import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { coreModule } from './@core/core.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgbModule,
        AppRoutingModule,
        coreModule,


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }