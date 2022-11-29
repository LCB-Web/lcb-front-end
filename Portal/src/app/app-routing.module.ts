import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('./@features/features.module').then((m) => m.featuresModule )

  },
  {
    path:'home',
    loadChildren: () =>
      import('./@features/homepage/homepage.module').then((m) => m.HomepageModule )

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
