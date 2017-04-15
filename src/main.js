import { createFactory } from "react";
import ReactDOM from "react-dom";
import fighters from "./fighter";
import { FighterList as _FighterList } from "./view/fighter-list";
import Player from "./fighter/player";
import Fixture from "./fixture";
import {Fixture as FixtureView} from "./view/fixture";
import Stats from "./stats";

const FighterList = createFactory(_FighterList);
const renderFixture = createFactory(FixtureView);

function hide(el){
  el.classList.add("hidden");
}

function show(el){
  el.classList.remove("hidden");
}

class App {
  constructor({ el, ready, matches }) {
    this.fighters = fighters;
    this.ready = ready;
    this.els = {
      container: el,
      fighters: el.querySelector("[data-role=fighters]"),
      warning: el.querySelector("[data-role=warning]"),
      fixtures: el.querySelector("[data-role=fixtures]")
    }
    this.matches = matches;
  }
  start() {
    console.log("Start app");
    if(!this.ready){
      this.els.warning.classList.remove("hidden");
    }
    const list = FighterList({ app: this, fighters: this.fighters });
    ReactDOM.render(list, this.els.fighters);
  }
  stop() {
    console.log("app terminated")
  }
  send(message, params={}){
    switch(message){
      case "start-match":
        this.startMatch(params);
        break;      
    }
  }
  startMatch({fighter}){
    const player = new Player();
    const oppornent = new (fighter.klass)();
    const fixtures = [];
    
    global.fixtures = () => fixtures;
    global.cards = () => fixtures.map(i => i.oppornentCard.type);
    global.results = () => fixtures.map(i => i.result);

    for(let i = 0; i < this.matches; i++){
      const fixture = new Fixture(fighter, player.action(fighter), oppornent.action());
      fixtures.push(fixture);
    }
    const stats = new Stats(fixtures);
    const model = {
      fixtures: fixtures,
      stats: stats,
      oppornent: fighter
    };
    const rendered = renderFixture({model: model});
    ReactDOM.render(rendered, this.els.fixtures);
    show(this.els.fixtures);
  }
}

function ready(){
  return typeof action === "function";
}

window.addEventListener("load", e => {
  const el = document.querySelector("#app");
  const app = new App({ el: el, ready: ready(), matches: 50 });
  app.start();

  window.addEventListener("beforeunload", e => {
    app.stop();
  }, { once: true });
}, { once: true });