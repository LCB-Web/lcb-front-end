import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NieuwsComponent} from "./nieuws.component";
import {NieuwsDetailComponent} from "./pages/nieuws-detail/nieuws-detail.component";

const routes: Routes = [
  {path: '',  children: [
      {path:'', component: NieuwsComponent},
      {path:':nieuwsID', component: NieuwsDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NieuwsRoutingModule { }
