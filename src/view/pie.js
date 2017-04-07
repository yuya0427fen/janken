import { DOM as dom, Component } from "react";
import { findDOMNode } from "react-dom";
import Chart from "chart.js";

class Pie extends Component {
  constructor(props){
    super(props);
    this.state = {
      updating: false
    };
  }
  get updating(){
    return this.state.updating;
  }
  set updating(value){
    this.setState({updating: value});
  }
  render() {
    const width = this.props.width || 400;
    const height = this.props.height || 400;
    return dom.canvas({ width: width, height: height });
  }
  componentDidMount() {
    const el = findDOMNode(this);
    const ctx = el.getContext("2d");
    const conf = {
      type: "pie",
      data: {
        labels: this.props.labels,
        datasets: [{
          data: this.props.data,
          backgroundColor: this.props.color,
        }]
      },
      options: {
        responsive: false,
        animation: {
          onComplete: (self, animation) => {
            console.log("updated");
          }
        }
      }
    };
    this.chart = new Chart(ctx, conf);
  }
  componentDidUpdate(){
    this.chart.data.datasets[0].data = this.props.data;
    this.chart.update();
  }
}

export { Pie as default };