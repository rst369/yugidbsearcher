import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Card } from 'src/app/interfaces/card';
import { CardsdbService } from 'src/app/services/cardsdb.service';


@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  cardsImgs: Array<any> = [];
  card: Card;
  cards: any;
  fname: String;

  constructor(private cardsdb: CardsdbService, private router: Router) {
    //this.cards = cardsdb.getMockCards();
  }

  ngOnInit(): void {

  }

  searchCard(event) {
    this.fname = event.target.value;

    if (this.fname.length >= environment.lenght_search_min) {
      this.cardsdb.getCardsByFName(this.fname).subscribe(response => {
        this.cards = response;
        this.loadCards();
      });
    }
  }

  searchCardAttr(event) {
    var input = <HTMLInputElement>document.getElementById("inputSearch");
    var value = input.value;
    var chk = <HTMLInputElement>document.getElementById("chckDesc");

    var attr;
    //alert("chk: "+ chk.checked);

    if (chk.checked)
      attr = "desc";
    else
      attr = "fname";

    if (value.length >= environment.lenght_search_min) {
      this.cardsdb.getCardsByAttr(attr, value).subscribe(response => {
        this.cards = response;
        this.loadCards();
      });
    }
  }

  searchCardAttrPlus(event) {

    var input = <HTMLInputElement>document.getElementById("inputSearch");
    var inputValue = input.value;
    var chkName = <HTMLInputElement>document.getElementById("chckName");
    var chkDesc = <HTMLInputElement>document.getElementById("chckDesc");
    var chkSpell = <HTMLInputElement>document.getElementById("chckSpell");
    var chckMonster = <HTMLInputElement>document.getElementById("chckMonster");
    var chckArctp = <HTMLInputElement>document.getElementById("chckArctp");
    var chckSet = <HTMLInputElement>document.getElementById("chckSet");

    var attr = [];
    var values = [];

    if (chkName.checked) {
      attr.push(environment.name_attr);
      values.push(inputValue);
    }

    if (chkDesc.checked) {
      attr.push(environment.desc_attr);
      values.push(inputValue);
    }

    if (chckArctp.checked) {
      attr.push(environment.archetype_attr);
      values.push(inputValue);
    }

    if (chkSpell.checked) {
      attr.push(environment.type_attr);
      values.push(environment.spell_type);
    }

    if (chckMonster.checked) {
      attr.push(environment.type_attr);
      values.push(environment.monster_type);
    }

    if (chckSet.checked) {
      attr.push(environment.set_attr);
      values.push(inputValue);
    }



    if (inputValue.length >= environment.lenght_search_min) {
      var response = this.cardsdb.getCardsByAttrs(attr, values);

      response.subscribe(response => {
        console.log(response);
        this.cards = response;
        this.loadCards();
      }, error => {
        console.log(error);
      });
    }
  }

  getUrlById(id, larger) {
    let img = "";
    if (larger)
      img = environment.pics_url + id + ".jpg";
    else
      img = environment.pics_small_url + id + ".jpg";
    return img;
  }

  showCard(id) {
    let cardTmp = this.cards.data.find(c => c.id == id);
    if (cardTmp !== undefined)
      this.card = cardTmp;
    else
      alert("Dados não Encontrados");
  }

  loadCards() {
    this.cardsImgs = [];
    this.card = null;
    if (this.cards !== undefined && this.cards.data) {
      this.cards.data.forEach(c => {
        this.cardsImgs.push(c.id);
      });
    }
  }

  enlarge(url) {
    window.open(url);
  }

}
