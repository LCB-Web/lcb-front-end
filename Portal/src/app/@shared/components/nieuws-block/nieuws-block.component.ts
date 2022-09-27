import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nieuws-block',
  templateUrl: './nieuws-block.component.html',
  styleUrls: ['./nieuws-block.component.scss']
})
export class NieuwsBlockComponent implements OnInit {

  @Input() nieuws:any

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.nieuws)
  }

}
