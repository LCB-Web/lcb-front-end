import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { throwIfAlreadyLoaded } from './module-import-guard';

// COMPONENTS
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {NgbCollapseModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { EventsComponent } from './components/events/events.component';
import { BlogComponent } from './components/blog/blog.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, EventsComponent, BlogComponent, FilterPanelComponent, ModalComponent, BreadcrumbsComponent],
  imports: [CommonModule, RouterModule, NgbCollapseModule, NgbModule]

})
export class coreModule {
  constructor(@Optional() @SkipSelf() parentModule: coreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}


