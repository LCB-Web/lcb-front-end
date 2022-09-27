import { Component, OnInit } from '@angular/core';
import {ProjectenService} from "../../@shared/services/projecten.service";

@Component({
  selector: 'app-projecten',
  templateUrl: './projecten.component.html',
  styleUrls: ['./projecten.component.scss']
})
export class ProjectenComponent implements OnInit {

  projecten:any;
  constructor(private service: ProjectenService) { }

  ngOnInit(): void {
    this.projecten = this.service.findAll()

    this.service.findAll().subscribe(x => console.log(x))
  }

}
