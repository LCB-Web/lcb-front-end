import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-thema-block',
  templateUrl: './thema-block.component.html',
  styleUrls: ['./thema-block.component.scss']
})
export class ThemaBlockComponent implements OnInit {

  @Input() thema:any
  constructor() { }

  ngOnInit(): void {
  }

}
