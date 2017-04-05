import Card from "../card";

class FizzBuzz{
  constructor(initial=0){
    this.seq = initial > -1 ? initial : 0;
  }
  action(){
    this.seq = this.seq + 1;
    if(this.seq % 15 == 0){
      return Card.create(Math.floor(Math.random() * 30));
    }
    if(this.seq % 5 == 0){
      return Card.create(2);
    }
    if(this.seq % 3 == 0){
      return Card.create(1);
    }
    return Card.create(0);
  }
}

export {FizzBuzz as default};