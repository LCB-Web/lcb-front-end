import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "../@core/components/layout/layout.component";

const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () =>
          import('./homepage/homepage.module').then((m) => m.HomepageModule)
      },
      {
        path:'themas',
        loadChildren: () =>
          import('./themas/themas.module').then((m) => m.ThemasModule)
      },
      {
        path:'projecten',
        loadChildren: () =>
          import('./projecten/projecten.module').then((m) => m.ProjectenModule)
      },
      {
        path:'nieuws',
        loadChildren: () =>
          import('./nieuws/nieuws.module').then((m) => m.NieuwsModule)
      },
      {
        path:'agenda',
        loadChildren: () =>
          import('./agenda/agenda.module').then((m) => m.AgendaModule)
      },
      {
        path:'over-ons',
        loadChildren: () =>
            import('./about/about.module').then((m) => m.AboutModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class featuresRoutingModule { }
