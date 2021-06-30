//import { Set } from './set';
export interface Card {
    name: String;
    type: String;
    desc: String;
    atk: Number;
    def: Number;
    level: Number;
    race: String;
    attribute: String;
    id: Number;
    card_sets: Set[];
}

export interface Set {
    set_code: String;
    set_name: String;
    set_price: String;
    set_rarity: String;
    set_rarity_code: String;
}