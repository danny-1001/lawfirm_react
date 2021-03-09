import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
        <div>
        <div className="container">
        </div>
        <div className="footer-container">
          <div className="row">
            <div className="col-lg-12 offset-lg-1">
              <div className="bottom-text">
                <span><a href="/what_we_do" title style={{margin: '2%'}}>WHAT WE DO</a></span>
                <span><a href title style={{margin: '2%'}}>NEWS &amp; EVENTS</a></span>
                <span><a href="/where_we_work" title style={{margin: '2%'}}>WHERE WE WORK</a></span>
                <span><a href="/contact" title style={{margin: '2%'}}>CONTACT US</a></span>
                <span><a href="/who_we_are" title style={{margin: '2%'}}>WHO WE ARE</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}