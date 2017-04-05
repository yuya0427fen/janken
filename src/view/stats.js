import {DOM as dom, Component} from "react";

function percentage(ratio){
  return Math.floor(ratio * 10000) / 100;
}

function matchStats(model){
  return dom.table({},
    dom.thead({},
      dom.tr({},
        dom.th({}, "勝ち"),
        dom.th({}, "引き分け"),
        dom.th({}, "負け")
      )
    ),
    dom.tbody({}, 
      dom.tr({},
        dom.td({}, `${model.wins} (${percentage(model.winPercentage)} %)`),
        dom.td({}, `${model.draws} (${percentage(model.drawPercentage)} %)`),
        dom.td({}, `${model.defeats} (${percentage(model.defeatPercentage)} %)`)                
      )
    )
  );
}

function cardStats(model){
  const stats = model.cards;
  return dom.table({},
    dom.thead({},
      dom.tr({},
        stats.map(record => {
          const card = record.card;
          return dom.th({key: card.name},
            card.toString()
          )
        })
      )
    ),
    dom.tbody({}, 
      dom.tr({},
        stats.map(record => {
          const card = record.card;
          return dom.td({key: card.name}, 
            `${record.occurence} (${percentage(record.percentage)} %)`
          )
        })
      )
    )
  );
}

class Stats extends Component{
  render(){
    const model = this.props.model;
    return dom.div({className: "stats", "data-role": "stats"},
      dom.h3({}, "勝ち負け"),
      matchStats(model),
      dom.h3({}, "相手の出したカードの種類"),
      cardStats(model)
    );
  }
}

export {Stats};
export {Stats as default};