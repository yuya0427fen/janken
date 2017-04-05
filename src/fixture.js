import { win, draw } from "./card";
import Stats from "./stats";

const WIN = 3;
const DRAW = 1;
const LOOSE = 0;

function result(playerCard, oppornentCard) {
  if (win(playerCard, oppornentCard)) {
    return WIN;
  }
  if (draw(playerCard, oppornentCard)) {
    return DRAW;
  }
  return LOOSE;
}

class Fixture {
  constructor(oppornent, playerCard, oppornentCard) {
    this._oppornent = oppornent;
    this._playerCard = playerCard;
    this._oppornentCard = oppornentCard;
    this._result = result(playerCard, oppornentCard);
  }
  get oppornent(){
    return this._oppornent;
  }
  get playerCard(){
    return this._playerCard;
  }
  get oppornentCard(){
    return this._oppornentCard;
  }
  get result() {
    return this._result;
  }
  get resultInString() {
    switch (this.result) {
      case WIN:
        return "W";
      case DRAW:
        return "D";
      default:
        return "L";
    }
  }
  get stats(){
    return this._stats;
  }
  toString() {
    return `Player (${this.playerCard}) : ${this.oppornent.name} (${this.oppornentCard}) : ${this.resultInString}`;
  }
}

export {Fixture};
export {Fixture as default};