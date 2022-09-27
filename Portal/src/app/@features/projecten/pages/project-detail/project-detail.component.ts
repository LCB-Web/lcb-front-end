import { Component, OnInit } from '@angular/core';
import {ProjectenService} from "../../../../@shared/services/projecten.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ProjectenService) { }

  project:any;
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params)
      this.service.findOne(params['ID']).subscribe(project => {
        console.log(project)
        this.project = project

      })

    })



  }

}
