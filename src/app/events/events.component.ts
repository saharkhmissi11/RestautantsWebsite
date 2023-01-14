import { Component, OnInit } from '@angular/core';
import { Image } from 'class/image';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events : Image[]=[];

  constructor() {
    this.events=[
      {"imageSrc":"assets/images/couscous-tunisien.jpeg",'title':'traditional food','path1':'traditional'},

      {"imageSrc":"assets/images/Molecular_gastronomy_science_s-1-450x401.jpg",'title':'molecular food','path1':'oriental'},
      
      
    ]
  }

  ngOnInit(): void {
  }

}
