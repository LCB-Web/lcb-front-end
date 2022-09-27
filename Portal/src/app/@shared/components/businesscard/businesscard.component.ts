import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-businesscard',
  templateUrl: './businesscard.component.html',
  styleUrls: ['./businesscard.component.scss']
})
export class BusinesscardComponent implements OnInit {

  @Input() contact:any;
  constructor() { }

  ngOnInit(): void {
  }

}
