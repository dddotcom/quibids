import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  render(){
    return(
      <div>
        <p className="text-right">New to QuiBids? <a href="#">Join Now!</a> | <a href="#">Sign in</a></p>
        <img className="navbar-img" src="http://www.rantlifestyle.com/wp-content/uploads/2015/08/octo.jpg"></img>
        <ul className="nav nav-tabs">
          <li role="presentation" className="active"><a href="/">Home</a></li>
          <li role="presentation"><a href="#">Browse</a></li>
          <li role="presentation"><a href="#">Games</a></li>
          <li role="presentation"><a href="#">Badges</a></li>
          <li role="presentation"><a href="#">Quibids 101</a></li>
          <li role="presentation"><a href="#">Help</a></li>
          <li role="presentation"><a href="#">Join Now!</a></li>
        </ul>

        <div className="input-group">
          <span className="input-group-addon"><strong>All Auctions</strong></span>
          <input type="text" className="form-control" placeholder="Search live auctions, products, and more..."/>
          <span className="input-group-addon btn btn-warning"><i className="fa fa-search" aria-hidden="true"></i></span>
        </div>
      </div>
    )
  }
}

export default Navbar;
