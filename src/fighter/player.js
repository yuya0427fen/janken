import Card from "../card";

class Player{
  action(fighter){
    if(typeof window.action === "function"){
      const id= window.action(fighter.id);
      return Card.create(id);
    }
    return null;
  }
}

export {Player as default}