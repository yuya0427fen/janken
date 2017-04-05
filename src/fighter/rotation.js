import Card from "../card";

class Rotation{
  constructor(startWith=0){
    this.lastCard = startWith;
  }
  action(){
    this.lastCard = (this.lastCard + 1) % Card.length;
    return Card.create(this.lastCard);
  }
}

export {Rotation as default};