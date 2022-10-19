import { Component, OnInit } from '@angular/core';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';

@Component({
  selector: '.app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private filterPanelComponent: FilterPanelComponent) {}
  //panel
  large: boolean = false;
  //info inside user-panel
  visible: boolean = false;
  //modal content
  display: boolean = false;

  openPanel(): void {
    this.large === false ? (this.large = true) : (this.large = !true);
    this.visible = !this.visible;
  }

  ngOnInit() {
    this.filterPanelComponent.change.subscribe((emitedValue) => {
      console.log(emitedValue);
      this.display = emitedValue;
    });
  }
}
