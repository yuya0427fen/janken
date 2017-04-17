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

export {Strategy};
export {Strategy as default};