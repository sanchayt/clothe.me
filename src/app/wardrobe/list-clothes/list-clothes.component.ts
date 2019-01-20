import { ClothesService } from './../../services/clothes.service';
import { Bottoms } from './../../constants/bottoms';
import { Footwear } from './../../constants/footwear';
import { Headwear } from './../../constants/headwear';
import { Tops } from './../../constants/tops';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-clothes',
  templateUrl: './list-clothes.component.html',
  styleUrls: ['./list-clothes.component.css']
})
export class ListClothesComponent implements OnInit {


  @Input() Title: String;

  Images: String[];
  constructor(private clothService: ClothesService, ) { }

  ngOnInit() {
    this.checkTitle();
    this.clothService.getClothes().subscribe(data => {
      console.log(data);
    });
  }

  checkTitle() {
    let file: String[];
    switch (this.Title) {
      case 'Top':  file = Tops;
      break;
      case 'Headwear':  file = Headwear;
      break;
      case 'Footwear':  file = Footwear;
      break;
      case 'Bottoms':  file = Bottoms;
      break;
      default:
      break;
    }
    this.Images = file;
  }
}
