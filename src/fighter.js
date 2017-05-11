import ChokiLover from "./fighter/choki-lover";
import OddEven from "./fighter/odd-even";
import OneThrid from "./fighter/one-third"
import Rotation from "./fighter/rotation";
import FizzBuzz from "./fighter/fizzbuzz";
import Random from "./fighter/random";

class Introduction{
  constructor(id, fighter, name, description){
    this._id = id;
    this._fighter = fighter;
    this._name = name;
    this._description = description;
  }
  get name(){
    return this._name;
  }
  get description(){
    return this._description;
  }
  get fighter(){
    return this._fighter;
  }
  get klass(){
    return this.fighter;
  }
  get id(){
    return `fighter::${this._id}`;
  }
}

const fighters = [
  new Introduction("choki-lover", ChokiLover, "チョキ大好きマン", "特定のカードが好きすぎて、それしか出さないプレーヤー。"),
  new Introduction("odd-even", OddEven, "表か裏かマン", "2種類のカードを交互に出していくプレーヤー。"),
  new Introduction("on-third", OneThrid, "帰ってきた表か裏かマン", "2種類のカードを使い分けていくプレーヤー。"),
  new Introduction("rotation", Rotation, "順番に出していくマン", "全部の種類のカードを、決まった順番で出していくプレーヤー。"),
  new Introduction("fizzbuzz", FizzBuzz, "ふぃずばずマン", "「ふぃずばず」のリズムで手を決めていくプレーヤー。"),
  new Introduction("random", Random, "さいころ大好きマン", "全てをさいころの目で決めていくプレーヤー")
];

export {fighters}
export {fighters as default}