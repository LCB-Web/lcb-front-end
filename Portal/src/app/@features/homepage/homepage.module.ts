import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { coreModule } from '../../@core/core.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from "../../@shared/shared.module";


@NgModule({
  declarations: [
    HomepageComponent
  ],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        SharedModule,
        // coreModule,
    ]
})
export class HomepageModule { }

