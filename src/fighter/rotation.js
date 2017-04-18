import Card from "../card";
import Strategy from "../strategy/round-robin";

class Rotation{
  constructor(){
    const cards = [Card.create(0), Card.create(1), Card.create(2)];
    this._strategy = new Strategy(cards);
  }
  get strategy(){
    return this._strategy;
  }
  action(){
    return this.strategy.action();
  }
}

export {Rotation as default};