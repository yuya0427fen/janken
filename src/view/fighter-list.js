import { DOM as dom, createFactory, Component } from "react"
import { Fighter as _FighterView } from "./fighter"

const FightView = createFactory(_FighterView);

class FighterList extends Component {
  render() {
    console.log(this.props.fighters.map(i => i.id));
    return dom.div({ className: "panel" },
      dom.h2({}, "対戦できるプレーヤーたち"),
      dom.ul({ className: "fighters" },
        this.props.fighters.map(i => FightView({ model: i, app: this.props.app, key: i.id }))
      ));
  }
}

export { FighterList }
export { FighterList as default }