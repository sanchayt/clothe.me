import { Clothing } from './../../constants/clothings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-wardrobe',
  templateUrl: './my-wardrobe.component.html',
  styleUrls: ['./my-wardrobe.component.css']
})
export class MyWardrobeComponent implements OnInit {

  constructor() { }

  CLOTHINGS =  Clothing;

  ngOnInit() {
  }

}
