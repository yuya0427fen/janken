import Card from "./card";

class Stats{
  constructor(fixtures){
    this._wins = fixtures.filter(i => i.result == 3);
    this._draws = fixtures.filter(i => i.result == 1);
    this._defeats = fixtures.filter(i => i .result == 0);
    this._matches = fixtures.length;

    this._cards = Card.list.map(card => {
      const num = fixtures.filter(i => i.oppornentCard.equals(card)).length;
      return {card: card, occurence: num, percentage: num / fixtures.length};
    });
  }
  get matches(){
    return this._matches;
  }
  get wins(){
    return this._wins.length;    
  }
  get draws(){
    return this._draws.length;
  }
  get defeats(){
    return this._defeats.length;
  }
  get winPercentage(){
    return this.wins / this.matches;
  }
  get drawPercentage(){
    return this.draws / this.matches;
  }
  get defeatPercentage(){
    return this.defeats / this.matches;
  }
  get cards(){
    return this._cards;
  }
}

export {Stats};
export {Stats as default};