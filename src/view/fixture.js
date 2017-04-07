import { DOM as dom, createFactory, Component } from "react";
import Stats from "./stats";

class Result extends Component {
  render() {
    const model = this.props.model;
    return dom.tr({ className: "fixture" },
      dom.td({ className: "match-number" }, this.props.matchNumber + 1),
      dom.td({ className: "player-card" }, model.playerCard.name),
      dom.td({ className: "oppornent-card" }, model.oppornentCard.name),
      dom.td({ className: "result" }, model.resultInString)
    );
  }
}

const renderResult = createFactory(Result);
const renderStats = createFactory(Stats);

function tableHeader() {
  return dom.thead({},
    dom.tr({},
      dom.th({}, "試合"),
      dom.th({}, "プレーヤー"),
      dom.th({}, "対戦相手"),
      dom.th({}, "結果")
    )
  );
}

class Fixture extends Component {
  render() {
    const model = this.props.model;
    const fixtures = model.fixtures;
    const stats = model.stats;
    const maxPoints = fixtures.length * 3; // XXX
    const points = fixtures.map(i => i.result).reduce((i, j) => i + j);

    return dom.div({ className: "panel" },
      dom.h2({}, 
        `vs ${model.oppornent.name}（得点: ${Math.ceil(points/150*100)} / 100）`),
      renderStats({ model: stats }),
      dom.h3({}, "勝敗表"),
      dom.table({},
        tableHeader(),
        dom.tbody({},
          fixtures.map((i, j) => renderResult({ model: i, key: j, matchNumber: j }))
        )
      )
    );
  }
}

export { Fixture };
export { Fixture as default };