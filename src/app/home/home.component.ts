import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'class/image';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images:Image[]=[];
  selectedIndex=0;
  indicator=true;
  

  constructor() {
    this.images=[
      {"imageSrc":"assets/images/kounafa.jpg",'title':'Oriental Food','path1':'/oriental'},
      {"imageSrc":"assets/images/c.jpg",'title':'Traditional Food','path1':'/traditional'},
      {"imageSrc":"assets/images/asiatic.png",'title':'Asiatic Food','path1':'/asiatic'},
      
      
    ]
   }

  ngOnInit(): void {
  }
  //sets index of image on dot/indicator click
  selectedImage(index:number):void{
    this.selectedIndex=index;

  }
  

}

  

  