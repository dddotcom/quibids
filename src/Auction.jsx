import React, { Component } from 'react';
import './App.css';

class Auction extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      price: this.props.price,
      secondsRemaining: this.props.secondsRemaining,
      lastBidder: this.props.lastBidder,
      img: this.props.img
    }
  }

  tick(){
    var time = this.state.secondsRemaining-1;
    if(time < 10){
      this.setState({secondsRemaining: "0" + time});
    } else {
      this.setState({secondsRemaining: "0" + time})
    }
    if(this.state.secondsRemaining <= 0){
      this.setState({secondsRemaining: 10});
    }
  }

  componentDidMount(){
    this.setState({secondsRemaining: 10});
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  bid(){
    const price = this.state.price;
    var p = parseFloat(price.split("$")[1]) + 0.01;
    this.setState({
      price: "$" + p.toFixed(2),
      secondsRemaining: 10
    });
  }

  render(){
    return(
      <div className="well col-md-3 text-center">
        <h4 className="auction-title">{this.state.title}</h4>
        <hr/>
        <img src={this.state.img} />
        <h3 className="text-danger"><strong>00:00:{this.state.secondsRemaining}</strong></h3>
        <p className="text-success">{this.state.price}</p>
        <p><strong>{this.state.lastBidder}</strong></p>
        <button className="btn btn-warning" onClick={this.bid.bind(this)}>Bid Now</button>
      </div>
    )
  }

}

export default Auction;
