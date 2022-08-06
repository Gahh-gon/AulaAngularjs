import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fist-component',
  templateUrl: './fist-component.component.html',
  styleUrls: ['./fist-component.component.css']
})
export class FistComponentComponent implements OnInit {
name:string = 'Gabriel';
age:number = 17;
job:String = 'Programador';
hobby:string[] =['Fazer caminhada','Jogar','Estudar'];
meioDeTransporte={
  name: 'Pernas',
  yean: '2004'  
};

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
