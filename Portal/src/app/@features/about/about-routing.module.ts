import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnsVerhaalComponent} from "./pages/ons-verhaal/ons-verhaal.component";


const routes: Routes = [
  { path: '',
    children:[
      {path:'', component: OnsVerhaalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
