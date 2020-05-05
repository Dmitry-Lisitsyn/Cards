import { Component, ViewChild, ElementRef } from '@angular/core';
import { Cards, ArrayCard } from './cards';
//import { createReadStream } from 'fs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app11';

  Card: Cards[];

  constructor() {
    Cards.id = 0;
    for (let i = 0; i < 10; i++) {
      var color;
      Cards.id++;
      var stat = Boolean(Math.round(Math.random()));
      if (stat == true) {
        color = "green";

      } else {
        color = "red"
      }
      ArrayCard.push({ id_card: Cards.id, status: stat, name: "Name", color });

    }
  }
  // Delete(id_buttron){

  //   for(let i=0;i<this.Card.length;i++){

  //     if(this.Card[i].id_card==id_buttron)

  //       this.Card.splice(i,1)

  //   }

  // }





}
