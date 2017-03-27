import React, { Component } from 'react';
import Auction from './Auction';

class Home extends Component{
  constructor(){
    super();
    this.state = {
      result: [
        {title: "250 Voucher Bids",
         price: "$27.85",
         secondsRemaining: 0,
         lastBidder: "workvan",
         img: "https://dl52d2tabxpgo.cloudfront.net/001/105/221/e.jpg"
        },
        {title: "100 Voucher Bids",
         price: "$10.10",
         secondsRemaining: 0,
         lastBidder: "wms100",
         img: "https://dl52d2tabxpgo.cloudfront.net/001/105/236/e.jpg"
        },
        {title: "Balloon animals",
         price: "$1.26",
         secondsRemaining: 0,
         lastBidder: "azsadie",
         img: "http://images.huffingtonpost.com/2010-04-01-balloonanimals1.jpg"
        },
        {title: "Hide a Key Sprinkler Header",
         price: "$0.03",
         secondsRemaining: 0,
         lastBidder: "bigdawg6976",
         img: "https://dl52d2tabxpgo.cloudfront.net/002/370/236/e.jpg"
        },
        {title: "Turtle",
         price: "$0.00",
         secondsRemaining: 0,
         lastBidder: "iloveturtles",
         img: "http://petattack.com/wp-content/uploads/2014/07/r-TURTLE-large570.jpg"
        },
        {title: "$15 Walmart Gift Card",
         price: "$2.35",
         secondsRemaining: 0,
         lastBidder: "workvan",
         img: "https://d3lh2hqqgsec27.cloudfront.net/merchant-images/lg/walmart.png"
        },
        {title: "$50 Shell Gift Card",
         price: "$0.03",
         secondsRemaining: 0,
         lastBidder: "chibbychubby",
         img: "https://easyrewards.tdbank.com/DATAHELIX/TD/PRODUIT_PHOTO/1759_std.jpg"
        },
        {title: "Lavish Home Sofia Curtain",
         price: "$2.92",
         secondsRemaining: 0,
         lastBidder: "CNaylor8",
         img: "http://images.prod.meredith.com/product/403e778ef24fd296ae9e67190eafd891/c8bddc79d3a54a0145007a3d9a506f28b50e0e817bffa5d8149cc80c6c9b3c3f/m/lavish-home-sofia-grommet-curtain-panel-grey"
        },
        {title: "Cuisinart Griddler Deluxe",
         price: "$2.51",
         secondsRemaining: 0,
         lastBidder: "MustWinThis7",
         img: "http://topfoodprocessorreview.com/wp-content/uploads/2013/09/Cuisinart-Griddler-Review.jpg"
        },
        {title: "100 Voucher Bids",
         price: "$3.11",
         secondsRemaining: 0,
         lastBidder: "RadarFL",
         img: "https://dl52d2tabxpgo.cloudfront.net/001/105/236/e.jpg"
        }
      ]
    }
  }
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-xs-6">
            <h3 className="text-left">Live Auctions</h3>
          </div>
          <div className="col-xs-6">
            <h3 className="text-right"><small>Sort by: Ending soon</small></h3>
          </div>
        </div>
        <hr/>
        <button>Filter By</button>
        <br/>
        {this.results()}

      </div>
    )
  };

  results(){
    return this.state.result.map( a =>
      <Auction title={a.title}
                price={a.price}
                secondsRemaining={a.secondsRemaining}
                lastBidder={a.lastBidder}
                img={a.img}
      />
    )
  }
}

export default Home;
