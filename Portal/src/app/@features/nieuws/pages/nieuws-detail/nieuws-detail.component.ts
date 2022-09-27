import { Component, OnInit } from '@angular/core';
import {NieuwsService} from "../../../../@shared/services/nieuws.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nieuws-detail',
  templateUrl: './nieuws-detail.component.html',
  styleUrls: ['./nieuws-detail.component.scss']
})
export class NieuwsDetailComponent implements OnInit {

  nieuwsbericht:any;

  constructor(private route: ActivatedRoute, private service: NieuwsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params)
      this.service.findOne(params['nieuwsID']).subscribe(nieuws => {
        console.log(nieuws)
        this.nieuwsbericht = nieuws
      })

    })
  }

}
