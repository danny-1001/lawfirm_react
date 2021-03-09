import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <button id="login-butt" type="button" className="btn btn-secondary">Log in</button>
                    <br /><br /><br />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <img src="https://via.placeholder.com/300x75?text=Company Logo" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row">
                        <div className="nav-border">
                            <div className="centerTop">
                                <ul>
                                    <li><Link to="/who_we_are" className="active">WHO WE ARE</Link></li>
                                    <li><Link to="/what_we_do">WHAT WE DO</Link></li>
                                    <li><Link to="#events">NEWS &amp; EVENTS</Link></li>
                                    <li><Link to="/where_we_work">WHERE WE WORK</Link></li>
                                    <li><Link to="/contact">CONTACT US</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}