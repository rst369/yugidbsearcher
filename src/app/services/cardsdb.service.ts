import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardsdbService {

  constructor(private http:HttpClient) { }

  card = {
    name: "Dark Magician",
    type: "Normal Monster",
    desc: "The ultimate wizard in terms of attack and defense.",
    atk: 2500,
    def: 2100,
    level: 7,
    race: "Spellcaster",
    attribute: "DARK",
    id: 46986414
  };
  
  card1 = {
    name: "Dark Magician",
    type: "Normal Monster",
    desc: "The ultimate wizard in terms of attack and defense.",
    atk: 2500,
    def: 2100,
    level: 7,
    race: "Spellcaster",
    attribute: "DARK",
    id: 46986414
  };
  
  card2 = {
    name: "Dark Magical Circle",
    type: "Spell Card",
    desc: "When this card is activated: Look at the top 3 cards of your Deck, then you can reveal 1 \"Dark Magician\" or 1 Spell/Trap that specifically lists the card \"Dark Magician\" in its text, among them, and add it to your hand, also place the remaining cards on top of your Deck in any order. If \"Dark Magician\" is Normal or Special Summoned to your field (except during the Damage Step): You can target 1 card your opponent controls; banish it. You can only use each effect of \"Dark Magical Circle\" once per turn.",
    atk: 0,
    def: 0,
    level: 0,
    race: "Continuous",
    attribute: "",
    id: 47222536
  };
  
  card3 = {
    name: "Witchcrafter Madame Verre",
    type: "Effect Monster",
    desc: "During damage calculation, if your Spellcaster monster battles an opponent's monster (Quick Effect): You can reveal any number of Spells with different names in your hand, and if you do, your battling monster gains 1000 ATK/DEF for each card revealed, until the end of this turn. (Quick Effect): You can discard 1 Spell; negate the effects of all face-up monsters your opponent currently controls, until the end of this turn. You can only use each effect of \"Witchcrafter Madame Verre\" once per turn.",
    atk: 1000,
    def: 2800,
    level: 8,
    race: "Spellcaster",
    attribute: "LIGHT",
    id: 21522601
  }

  getMockCards(){
    return [this.card1,this.card2,this.card3];
 }

 getCardsByFName(fname:String):Observable<Card[]>{
   return this.http.get<Card[]>(environment.api_url+"?fname="+fname);
 }
 getCardsByAttr(attr:String, value:String):Observable<Card[]>{
  return this.http.get<Card[]>(environment.api_url+"?"+attr+"="+value);
}
getCardsByAttrs(attr:String[], value:String[]):Observable<Card[]>{
  
  var urlQuery = environment.api_url+"?";
  var params=""
  for(var i=0;i<attr.length;i++){
    params+=attr[i]+"="+value[i];
    if(i!=attr.length-1)
      params+="&";
  }
  if(params=="")
    return;

  return this.http.get<Card[]>(urlQuery+params);
}

}
