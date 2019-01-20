import { ClothesService } from './services/clothes.service';
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
import { ItemSuggestionComponent } from './wardrobe/item-suggestion/item-suggestion.component';



@NgModule({
  declarations: [
    AppComponent,
    MyWardrobeComponent,
    ListClothesComponent,
    AddClothesComponent,
    NavbarComponent,
    OutfitComponent,
    ItemSuggestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClothesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
