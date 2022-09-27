import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ThemaService} from "../../@shared/services/thema.service";


@Component({
  selector: 'thema-detail',
  templateUrl: './thema.component.html',
  styleUrls: ['./thema.component.scss']
})
export class ThemaComponent implements OnInit {


  thema:any;
  t:any;
  specialisten:any;
  themaleider:any;

  constructor(private route: ActivatedRoute,private themaService: ThemaService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params)
      this.themaService.findOne(params['themaID']).subscribe(thema => {
        this.thema = thema
        console.log(thema)
      })


      }
    )
  }

}
