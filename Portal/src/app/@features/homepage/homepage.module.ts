import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from "../../@shared/shared.module";
// import { coreModule } from '../../@core/core.module';


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

