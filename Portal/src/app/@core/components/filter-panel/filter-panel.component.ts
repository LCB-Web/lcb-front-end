import {
  Injectable,
  Output,
  EventEmitter,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
})

@Injectable({
  providedIn: 'root',
})

export class FilterPanelComponent implements OnInit {
  @Output() change: EventEmitter<any> = new EventEmitter();
  @Output() changeBreadcrumb: EventEmitter<any> = new EventEmitter();

  display: boolean = false;
  type: string = '';

  sendData(data: boolean, event: any): void {
    this.change.emit(this.display);
    this.changeBreadcrumb.emit(event.target.id);
  }

  onItemChange(value: any) {
    this.type = value.path[0].id;
  }

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
        //TODO: TYPE radio button expected behavoiour
        if (this.type === 'whitepaper') {
          console.log('aap');
        }
        this.display = !this.display;
        this.sendData(this.display, event);
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
  ngOnInit(): void {}
}
