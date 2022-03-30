import React from 'react';
import ReactDOM from 'react';
import './index.css';

class Square extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    //Todo: use onclick={this.props.onClick}
    //Todo: replace this.state.value with this.props.value
    return (
    <button 
      className="square" 
      onClick={() => this.setState({value: 'X'})}>
      {this.state.value}
    </button>
    );
  }
}

class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Squares: Array(9).fill(null),
    };
  }
  renderSquare(i){
    return <Square value={this.state.squares[i]} />;
  }
}


