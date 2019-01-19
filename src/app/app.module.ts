import { MyWardrobeComponent, AddClothesComponent } from './wardrobe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClothesComponent } from './wardrobe/list-clothes/list-clothes.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { OutfitComponent } from './wardrobe/outfit/outfit.component';
import { ItenSuggestionComponent } from './wardrobe/iten-suggestion/iten-suggestion.component';
import { ItemSuggestionComponent } from './wardrobe/item-suggestion/item-suggestion.component';



@NgModule({
  declarations: [
    AppComponent,
    MyWardrobeComponent,
    ListClothesComponent,
    AddClothesComponent,
    NavbarComponent,
    OutfitComponent,
    ItenSuggestionComponent,
    ItemSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
