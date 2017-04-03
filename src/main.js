import {createFactory} from "react";
import ReactDOM from "react-dom";
import fighters from "./fighter";
import {FighterList as _FighterList} from "./view/fighter-list";

const FighterList = createFactory(_FighterList);

class App{
  constructor({el}){    
    this.fighters = fighters;
    this.els = {
      container: el,
      fighters: el.querySelector("[data-role=fighters]")
    }
  }
  start(){
    console.log("Start app");
    const list = FighterList({app: this, fighters: this.fighters});
    ReactDOM.render(list, this.els.fighters);    
  }
  stop(){
    console.log("app terminated")
  }
}

window.addEventListener("DOMContentLoaded", e => {
  const el = document.querySelector("#app");
  const app = new App({el: el});
  app.start();
  
  window.addEventListener("beforeunload", e => {
    app.stop();
  }, {once: true});
}, {once: true});