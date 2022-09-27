import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-projecten-block',
  templateUrl: './projecten-block.component.html',
  styleUrls: ['./projecten-block.component.scss']
})
export class ProjectenBlockComponent implements OnInit {

  @Input() project:any
  constructor() { }

  ngOnInit(): void {
  }

}
