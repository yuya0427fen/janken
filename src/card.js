class _Card{
  constructor(type, name){
    this._type = type;
    this._name = name;
  }
  get type(){
    return this._type;
  }
  get name(){
    return this._name;
  }
  toString(){
    return this.name;
  }
}

const cards = [
  new _Card(0, "グー"),
  new _Card(1, "チョキ"),
  new _Card(2, "パー")
];

const Card = {
  list: cards,
  create: function(id){
    id = id < 0 ? 0 : id % 3;
    return this.list[id];
  },
  win: function(cardA, cardB){
    return (cardA.type + 1) % 3 == cardB.type;
  },
  loose: function(cardA, cardB){
    return (cardB.type + 1) % 3 == cardA.type;
  },
  draw: function(cardA, cardB){
    return cardA.type == cardB.type;
  }
};

export {Card as default}