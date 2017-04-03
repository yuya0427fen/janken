import { DOM as dom, Component } from "react";

function fighterName(name) {
  return dom.span({ "data-role": "fighter-name" }, name)
}

function fightButton({ fighter, app }) {
  return dom.span({},
    dom.a({
      href: `#start-match?vs=${fighter.id}`,
      "data-role": "match-start",
      onClick: e => {
        app.send("start-match", { fighter: fighter });
      },
    }, "対戦開始"));
}

class Fighter extends Component {
  startFight() {
    this.porps.app.send("start-fight", { fighter: this.props.model });
  }
  render() {
    return dom.li({ className: "fighter", key: this.props.model.id },
      fighterName(this.props.model.name),
      fightButton({ fighter: this.props.model, app: this.props.app })
    );
  }
}

export { Fighter }
export { Fighter as default }