import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThemaComponent} from "./thema.component";

const routes: Routes = [
  { path: '',
    children:[
      {path:':themaID', component: ThemaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemasRoutingModule { }
