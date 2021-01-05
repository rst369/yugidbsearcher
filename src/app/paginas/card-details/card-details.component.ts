import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Subject } from 'rxjs';
import { filter,takeUntil } from 'rxjs/operators';
import { Card } from 'src/app/interfaces/card';
import { CardsdbService } from 'src/app/services/cardsdb.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardsImgs: Array<any>=[];
  card: Card;
  cards: any;
  fname:String;

  constructor(private  cardsdb:CardsdbService, private router:Router){
    //this.cards = cardsdb.getMockCards();
  }

  ngOnInit(): void {
    
  }

  searchCard(event){
    this.fname = event.target.value;

    if(this.fname.length>6){
      this.cardsdb.getCardsByFName(this.fname).subscribe(response=>{
        this.cards=response;
        this.loadCards();
      });
    }
  }

  getUrlById(id,larger){
    let img ="";
    if(larger)
      img = "https://storage.googleapis.com/ygoprodeck.com/pics/"+id+".jpg";
    else
      img = "https://storage.googleapis.com/ygoprodeck.com/pics_small/"+id+".jpg";
    return img;
  }
 
  showCard(id){
    let cardTmp = this.cards.data.find(c => c.id == id);
    if(cardTmp !== undefined) 
      this.card = cardTmp; 
    else
      alert("Dados não Encontrados");
  }

  loadCards(){
    //debugger;
    this.cardsImgs = [];
    if(this.cards !== undefined && this.cards.data){
      this.cards.data.forEach(c => {
        this.cardsImgs.push(c.id);
      });
    }
  }
  
  enlarge(url){
    window.open(url);
  }

}
