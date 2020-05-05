import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cards, ArrayCard } from '../cards';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  Cards: Cards[] = [];

  constructor() {

    this.Cards = ArrayCard;

  }

  ngOnInit(): void {
  }


  delete(id_buttron) {

    for (let i = 0; i < this.Cards.length; i++) {

      if (this.Cards[i].id_card == id_buttron)

        this.Cards.splice(i, 1);

    }

  }

  clear_all() {

    // for (let k = 0; k <= this.Cards.length; k++) {

    //   if (this.Cards[k].id_card == k)
    //console.log(this.Cards[2].id_card);   
    this.Cards.splice(0, this.Cards.length);


    //}


  }



  // addCard() {
  //   var color;
  //   var stat = Boolean(Math.round(Math.random()));
  //   Cards.id++;
  //   if (stat == true) {
  //     color = "green";

  //   } else {
  //     color = "red";
  //   }
  //   this.Card.push({ id_card: Cards.id, status: stat, name: "Name", color });
  // }

  addCard(Name, Color) {

    if (this.Cards.length != 0) {
      Cards.id++;
    } else {
      Cards.id = 1;
    }

    var stat = Boolean(Math.round(Math.random()));

    this.Cards.push({ id_card: Cards.id, status: stat, name: Name, color: Color })


  }


}