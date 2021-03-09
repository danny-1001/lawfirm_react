import React, { Component } from 'react'

export default class what_we_do extends Component {
        render() {

        return (
            <div className="container">
        <div style={{marginTop: '20px'}} className="row">
          <div className="col-md-3">
            <section>
              <div className="section-container">
                <div className="container1">
                  <h5>WHAT WE DO</h5>
                </div>
                <hr className="divider" />
                <div className="container">
                  <h6>Subrogation</h6>
                  <ul>
                    <li>Property</li>
                    <li>Workers' Comp</li>
                  </ul>
                </div>
                <div className="container">
                  <h6>Litigation</h6>
                  <ul>
                    <li>Appeliate</li>
                    <li>Commercial</li>
                    <li>Defense</li>
                    <li>Labor/Employment</li>
                  </ul>
                </div>
                <div className="container">
                  <h6>Business</h6>
                  <ul>
                    <li>Brokerage Agreement</li>
                    <li>Business Formation</li>
                    <li>Contracts</li>
                    <li>Property</li>
                    <li>Labor/Employment</li>
                  </ul>
                </div>
                <div className="container">
                  <h6>Transportation</h6>
                  <ul>
                    <li>Brokerage Agreement</li>
                    <li>Business Formation</li>
                  </ul>
                </div>
                <div className="text-center container-fluid">
                  <img src="./static/images/Chairs.png" style={{width: '180px', height: '130px'}} alt="" />
                </div>
                <div className="container1">
                  <h6>Attorneys</h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-9">
            <article>
              <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Reprehenderit libero non laborum blanditiis ipsum? Doloremque,
                  ad reprehenderit eum voluptatem excepturi odio at aliquam et
                  impedit repellendus. Illum ad adipisci fugit? Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Impedit quibusdam repudiandae
                  minus mollitia alias. Aut molestias hic voluptate magnam ex sunt
                  incidunt saepe eaque consectetur, fugit dicta fugiat exercitationem
                  voluptas.</p>
              </div>
            </article>
            <div className="container2">
              <div className="image"><img src="./static/images/Subrogation.png" style={{width: '320px', height: '150px'}} alt="" />
              </div>
              <div className="image"><img src="./static/images/Litigation.png" style={{width: '320px', height: '150px'}} alt="" />
              </div>
              <div className="image"><img src="./static/images/Transportation.png" style={{width: '320px', height: '150px'}} alt="" /></div>
              <div className="image"><img src="./static/images/Business.png" style={{width: '320px', height: '150px'}} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}