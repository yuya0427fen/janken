import Card from "../card";
import Strategy from "../strategy/same-card";

class ChokiLover{
  constructor(){
    this._strategy = new Strategy(Card.create(1));
  }
  get strategy(){
    return this._strategy;
  }
  action(){
    return this.strategy.action();
  }
}

export {ChokiLover as default};