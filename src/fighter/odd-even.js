import Card from "../card";

class OddEven{
  constructor(initial=0){
    initial = initial > -1 ? initial : 0;
    this.lastCard = initial % 2;
  }
  action(){
    this.lastCard = (this.lastCard + 1) % 2;
    return Card.create(this.lastCard);
  }
}

export {OddEven as default};