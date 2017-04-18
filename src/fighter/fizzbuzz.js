import Card from "../card";
import Strategy from "../strategy/mod";

class FizzBuzz {
  constructor() {
    const defaultAction = matches => Card.create(0);
    const fizz = matches => Card.create(0);
    const buzz = matches => Card.create(1);
    const fizzbuzz = matches => Card.create(2);
    const actions = [
      fizzbuzz,
      ,
      ,
      fizz,
      ,
      buzz,
      fizz,
      ,
      ,
      buzz,
      fizz,
      ,
      buzz,
      ,
      ,
    ];
    this._strategy = new Strategy({
      actions: actions,
      defaultAction: defaultAction
    });
  }
  get strategy(){
    return this._strategy;
  }
  action() {
    return this.strategy.action();
  }
}

export { FizzBuzz as default };