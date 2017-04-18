import Card from "../card";
import Strategy from "../strategy/round-robin";

class OddEven{
  constructor(){
    const cards = [Card.create(0), Card.create(1)];
    this._strategy = new Strategy(cards);
  }
  get strategy(){
    return this._strategy;
  }
  action(){
    return this.strategy.action();
  }
}

export {OddEven as default};