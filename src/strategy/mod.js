class Strategy{
  constructor({actions=[], defaultAction}){
    this._divisor = actions.length;
    this._default = defaultAction;
    this._actions = actions;
    this._matches = 0;
  }
  get divisor(){
    return this._divisor;
  }
  get default(){
    return this._default;
  }
  get actions(){
    return this._actions;
  }
  get matches(){
    return this._matches;
  }
  getAction(){
    const index = this.matches % this.divisor;
    return this.actions[index] || this.default;
  }
  action(){
    this._matches++;    
    const card = this.getAction()(this.matches);
    return card;
  }
}

export {Strategy, Strategy as Mod};
export {Strategy as default};