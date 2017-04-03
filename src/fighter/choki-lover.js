import Strategy from "../strategy"
import Card from "../card";

class ChokiLover{
  constructor(){
    this.favorite = Card.create(1);
  }  
  toString(){
    return this.name;
  }  
  action(){
    return Strategy.sameCard(this.favorite);
  }
  static get name(){
    return "チョキが大好き";
  }
  static get id(){
    return "fighter::ChokiLover";
  }
}

export {ChokiLover as default};