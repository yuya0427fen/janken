import Card from "../card";

class Random{
  constructor(){
    const goo = Math.random();
    const choki = Math.random() * (1.0 - goo) + goo;
    this._thresholds = [goo, choki, 1.0];    
  }
  get thresholds(){
    return this._thresholds;
  }
  nextCard(){
    const p = Math.random();
    const index = this.thresholds.findIndex(i => p < i);    
    return Card.create(index);
  }
  action(){
    return this.nextCard();
  }
}

export {Random};
export {Random as default};