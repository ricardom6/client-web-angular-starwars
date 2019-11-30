import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';


@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  films: [];
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
​
  constructor(private service : FilmsService) { }
​
  ngOnInit() {
    this.getAll();
  }

  getAll(){ 
    this.service.get().subscribe(films =>{
        console.log(films);
      });
  }
​
}





