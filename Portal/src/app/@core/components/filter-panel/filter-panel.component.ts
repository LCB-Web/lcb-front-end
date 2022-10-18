import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})
export class FilterPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getThemeID(event: any) {
    switch (event.target.id) {
      case 'multimodaal': {
        break;
      }
      case 'smart-industrie': {
        break;
      }
      case 'leefbare-stad': {
        break;
      }
      case 'zorglogistiek': {
        break;
      }
      case 'evenementen-logistiek': {
        break;
      }
      case 'data-logistiek': {
        break;
      }

      default: {
        //statements;
        break;
      }
    }
  }
}
