import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectenComponent} from "./projecten.component";
import {ProjectDetailComponent} from "./pages/project-detail/project-detail.component";

const routes: Routes = [
  {path: '', children: [
      {path: '', component: ProjectenComponent },
      {path: ':ID', component: ProjectDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectenRoutingModule { }
