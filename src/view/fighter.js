import { DOM as dom, Component } from "react";

function name(fighter) {
  return dom.span({ "data-role": "fighter-name" }, fighter.name)
}

function button({ fighter, app }) {
  return dom.span({},
    dom.a({
      href: `#start-match?vs=${fighter.id}`,
      "data-role": "match-start",
      onClick: e => {
        e.preventDefault();
        app.send("start-match", { fighter: fighter });
      },
    }, "対戦開始"));
}

function description(fighter){
  return dom.span({}, fighter.description);
}

class Fighter extends Component {
  startFight() {
    this.porps.app.send("start-fight", { fighter: this.props.model });
  }
  render() {
    const fighter = this.props.model;
    return dom.li({ className: "fighter", key: fighter.id },
      name(fighter),
      description(fighter),
      button({ fighter: fighter, app: this.props.app })      
    );
  }
}

export { Fighter }
export { Fighter as default }