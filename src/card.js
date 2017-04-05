class _Card {
  constructor(type, name) {
    this._type = type;
    this._name = name;
  }
  get type() {
    return this._type;
  }
  get name() {
    return this._name;
  }
  toString() {
    return this.name;
  }
  equals(card){
    return this.type == card.type;
  }
}

const cards = [
  new _Card(0, "グー"),
  new _Card(1, "チョキ"),
  new _Card(2, "パー")
];

function win(cardA, cardB) {
  return (cardA.type + 1) % 3 == cardB.type;
}
function loose(cardA, cardB) {
  return (cardB.type + 1) % 3 == cardA.type;
}
function draw(cardA, cardB) {
  return cardA.type == cardB.type;
}

const Card = {
  list: cards,
  get length() {
    return this.list.length;
  },
  create: function (id) {
    id = id < 0 ? 0 : id % 3;
    return this.list[id];
  },
  win: win,
  draw: draw,
  loose: loose
};

export { win, draw, loose};
export { Card as default }