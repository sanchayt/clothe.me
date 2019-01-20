import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutfitComponent } from './wardrobe/outfit/outfit.component';
import { MyWardrobeComponent, AddClothesComponent } from './wardrobe';

const routes: Routes = [

  {
    path: 'outfit',
    component: OutfitComponent
  },

  {
    path: 'home',
    component: MyWardrobeComponent
  },
  {
    path: 'add-clothes',
    component: AddClothesComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
