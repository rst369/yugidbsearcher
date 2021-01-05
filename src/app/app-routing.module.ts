import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardDetailsComponent } from './paginas/card-details/card-details.component';
import { NotfoundComponent } from './paginas/notfound/notfound.component';

const routes: Routes = [
  {
    path:"",
    component:CardDetailsComponent
  },
  {
    path:"card-details",
    component: CardDetailsComponent
  },
  {
    path:"**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
