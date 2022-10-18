import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  //panel
  large: boolean = false;
  //info inside
  visible: boolean = false;

  openPanel(): void {
    this.large === false ? (this.large = true) : (this.large = !true);
    this.visible = !this.visible;
  }
  constructor() {}

  ngOnInit(): void {}
}
