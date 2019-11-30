import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
​
  constructor() { }
​
  ngOnInit() {
  }
​
}





