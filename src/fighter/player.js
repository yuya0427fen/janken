import Card from "../card";

class Player{
  action(){
    if(typeof window.action === "function"){
      const id= window.action();
      return Card.create(id);
    }
    return null;
  }
}

export {Player as default}