import { DOM as dom, Component, createFactory } from "react";
import Pie from "./pie";

const renderChart = createFactory(Pie);

const color = ["#0086AB", "#42AAC7", "#97D3E3"];

function percentage(ratio) {
  return Math.floor(ratio * 10000) / 100;
}

function matchStats(model) {
  return dom.table({},
    dom.thead({},
      dom.tr({},
        dom.th({}, "結果"),
        dom.th({}, "回数（割合）")
      )
    ),
    dom.tbody({},
      dom.tr({},
        dom.td({}, "勝ち"),
        dom.td({}, `${model.wins} (${percentage(model.winPercentage)} %)`)
      ),
      dom.tr({},
        dom.td({}, "引き分け"),
        dom.td({}, `${model.draws} (${percentage(model.drawPercentage)} %)`)
      ),
      dom.tr({},
        dom.td({}, "負け"),
        dom.td({}, `${model.defeats} (${percentage(model.defeatPercentage)} %)`)
      )
    )
  );
}

function cardStats(model) {
  const stats = model.cards;
  return dom.table({},
    dom.thead({},
      dom.tr({},
        dom.th({}, "カード"),
        dom.th({}, "回数（割合）")
      )
    ),
    dom.tbody({},
      stats.map(record => {
        const card = record.card;
        return dom.tr({key: card.name},
          dom.td({}, card.toString()),
          dom.td({},
            `${record.occurence} (${percentage(record.percentage)} %)`)
        )
      })
    )
  );
}

class Stats extends Component {
  render() {
    const model = this.props.model;
    return dom.div({ className: "stats", "data-role": "stats" },
      dom.div({},
        dom.h3({}, "勝ち負け"), 
        renderChart({
          labels: ["勝ち", "引き分け", "負け"],
          data: [model.wins, model.draws, model.defeats],
          color: color
      }),
        matchStats(model)),
      dom.div({},
        dom.h3({}, "相手の出したカードの種類"),
        renderChart({
          labels: model.cards.map(i => i.card.name),
          data: model.cards.map(i => i.occurence),
          color: color
        }),
        cardStats(model))
    );
  }
  componentDidMount(){
    console.log("stats is mounted");
  }
}

export { Stats };
export { Stats as default };