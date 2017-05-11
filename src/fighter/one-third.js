import Card from "../card";
import Strategy from "../strategy/mod";

class OneThrid{
  constructor() {
    const defaultAction = matches => Card.create(1);
    const specialAction = matches => Card.create(2);
    const actions = [
      specialAction,
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

export {OneThrid as default};
