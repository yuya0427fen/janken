class Strategy{
  constructor(prefered){
    this._prefered = prefered;
  }
  get prefered(){
    return this._prefered;
  }
  action(){
    return this.prefered;
  }
}

export {Strategy, Strategy as SameCard};
export {Strategy as default};