import { Router } from '@angular/router'; 
import { Component, OnInit } from '@angular/core';
import { CardsdbService } from 'src/app/services/cardsdb.service';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'ygo-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  cardsImgs: Array<Number>;
  card: Card;
  cards: Array<any>;
  
  constructor(private  cardsdb:CardsdbService, private router:Router){
    this.cards = cardsdb.getMockCards();
  }
  
  ngOnInit(){
    this.loadCards();
  }
  
  showCard(id){
    let cardTmp = JSON.stringify(this.cards.find(c => c.id == id));
    sessionStorage.setItem('card',cardTmp);
   this.router.navigate(['/card-details']);
  }
  
  loadCards(){
    this.cardsImgs = [21522601,
  72498838,
  47222536,
  46986414]; 
  }
  
  getUrlById(id){
    return "https://storage.googleapis.com/ygoprodeck.com/pics/"+id+".jpg";
  }
  
  enlarge(url){
    window.open(url);
  }

}
