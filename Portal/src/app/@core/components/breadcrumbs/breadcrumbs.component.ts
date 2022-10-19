import { Component, OnInit } from '@angular/core';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';

@Component({
  selector: '.app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  constructor(private filterPanelComponent: FilterPanelComponent) {}

  breadcrumb: string = '';

  ngOnInit() {
    this.filterPanelComponent.changeBreadcrumb.subscribe((emitedValue) => {
      console.log(emitedValue);
      this.breadcrumb = emitedValue;
    });
  }
}
