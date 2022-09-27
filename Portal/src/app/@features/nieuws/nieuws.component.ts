import { Component, OnInit } from '@angular/core';
import {NieuwsService} from "../../@shared/services/nieuws.service";

@Component({
  selector: 'app-nieuws',
  templateUrl: './nieuws.component.html',
  styleUrls: ['./nieuws.component.scss']
})
export class NieuwsComponent implements OnInit {

  nieuws: any;
  constructor(private service: NieuwsService) { }

  ngOnInit(): void {
    this.nieuws = this.service.findAll()
    this.service.findAll().subscribe(N => {console.log(N)})

  }

}
