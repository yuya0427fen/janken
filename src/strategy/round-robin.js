class Strategy{
  constructor(cards){
    this._cards = cards;
    this._index = cards.length - 1;
  }
  get cards(){
    return this._cards;
  }
  nextCard(){
    this._index = (this._index + 1) % this.cards.length;
    return this.cards[this._index];
  }
  action(){
    return this.nextCard();
  }
}

export {Strategy, Strategy as RoundRobin};
export {Strategy as default};
