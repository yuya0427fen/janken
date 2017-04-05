import Card from "../card";

class ChokiLover{
  constructor(){
    this.favorite = Card.create(1);
  }
  action(){
    return this.favorite;
  }
}

export {ChokiLover as default};