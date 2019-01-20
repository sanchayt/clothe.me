import { Component, OnInit, Input, NgZone, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.css']
})

export class AddClothesComponent implements OnInit {

  img_src = '../../../assets/Images/blue-jeans.jpg';

  ngOnInit() {}
  constructor() {
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    console.log(file);
    this.upload(file);
  }

  upload(file: any) {
    console.log(file);

    // this.studentService.uploadImage(file, +this.currentStudent.id).subscribe(data => {

    //  console.log(data);
    //  this.currentStudent.picture = data.toString();
    //  this.img_src = `http://3.16.54.7/Images/${this.currentStudent.picture}`;
    // });
  }

}
