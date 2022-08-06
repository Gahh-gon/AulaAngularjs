import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show:boolean = false;
menu:boolean = true

  constructor() { }

  ngOnInit(): void {
    
  }

showMsg(): void{

  this.show = !this.show;

}

menuVisivel():void{

  this.menu = !this.menu;
  
}

}
