import '../lib/input-slider.less';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputSlider from '../lib/input-slider';
import packageJSON from '../package.json';

class App extends Component {
  state = {
    x: 21,
    y: 73,
    left: 120,
    left2: 140,
    top: 120
  };

  render() {
    return (
      <div className="app">
        <h1>
          react-input-slider
          <span className="version">{packageJSON.version}</span>
        </h1>
        <div className="wrap">
          <div className="example example-xy">
            <h3>axis='xy', xmax=100, ymax=100</h3>
            <div>{'x: ' + this.state.x}</div>
            <div>{'y: ' + this.state.y}</div>
            <InputSlider
              className="slider"
              axis="xy"
              x={this.state.x}
              xmax={100}
              y={this.state.y}
              ymax={100}
              onDragEnd={this.handleDragEnd}
              onChange={this.handleChange}
            />
          </div>

          <div className="example example-x">
            <h3>axis='x', xstep=10, xmin=100, xmax=355</h3>
            <div>{'x: ' + this.state.left}</div>
            <InputSlider
              className="slider"
              axis="x"
              x={this.state.left}
              x2={this.state.left2}
              xmin={100}
              xmax={355}
              xstep={10}
              onDragEnd={this.handleDragEnd}
              onChange={this.handleChangeX}
            />
          </div>

          <h3>&lt;input type="range" min="100" max="355" step="10"&gt;</h3>
          <input
            type="range"
            min="100"
            max="355"
            step="10"
            value={this.state.left}
            onChange={this.handleRangeChange}
          />

          <div className="example example-y">
            <h3>axis='y', ymin=100, ymax=360</h3>
            <div>{'y: ' + this.state.top}</div>
            <InputSlider
              className="slider"
              axis="y"
              y={this.state.top}
              ymin={100}
              ymax={360}
              onDragEnd={this.handleDragEnd}
              onChange={this.handleChangeY}
            />
          </div>
        </div>
      </div>
    );
  }

  handleDragEnd = () => {
    console.log('handleDragEnd');
  };

  handleChange = pos => {
    this.setState({
      x: pos.x,
      y: pos.y
    });
  };

  handleChangeX = pos => {
    this.setState({
      left: pos.x
    });
  };

  handleChangeY = pos => {
    this.setState({
      top: pos.y
    });
  };

  handleRangeChange = e => {
    this.setState({
      left: parseInt(e.target.value, 10)
    });
  };
}

ReactDOM.render(<App />, document.getElementById('app'));
