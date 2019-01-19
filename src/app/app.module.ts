import { MyWardrobeComponent, AddClothesComponent } from './wardrobe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClothesComponent } from './wardrobe/list-clothes/list-clothes.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    MyWardrobeComponent,
    ListClothesComponent,
    AddClothesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
