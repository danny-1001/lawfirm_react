import React, { Component } from 'react'


export default class where_we_work extends Component {
    render() {
        return (
            <div className="flex-container">
        <div className="leftRedBox">
          <h2 style={{marginTop: '15px'}}>WHERE WE WORK</h2>
          <hr />
          <p>United States</p>
          <p>International</p>
          <img src="https://cdn7.dissolve.com/p/D1061_16_389/D1061_16_389_1200.jpg" alt="Man Computer" className="center" />
          <p style={{marginTop: '15px'}}><strong>Career Opportunties</strong></p>
          <p>Join our magnificent firm.</p>
        </div>
        <div className="rightTextBox">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum odit harum molestiae
            assumenda
            in.
            Fugiat minima aperiam quo maxime eveniet, tenetur minus nesciunt ipsa culpa. Aliquam
            odit
            similique
            soluta doloremque voluptatem placeat dicta, facilis modi quae saepe rerum, recusandae
            accusantium
            esse illum neque officiis veniam et. Repellendus autem fugiat repudiandae fuga eaque
            minima eius
            similique? Cumque sint tenetur sunt, culpa eos molestias eum obcaecati, dolorem,
            deserunt
            distinctio
            aliquam! Magnam unde eos quaerat ut similique praesentium ex, atque quis quisquam amet
            sapiente,
            fugit ullam in blanditiis, alias at nobis enim aut odio facere? Sunt fugiat fuga harum,
            ad
            doloribus
            minima, omnis, eligendi amet nisi recusandae accusamus iure doloremque repudiandae
            laudantium
            tempore iusto. Deleniti ex corrupti nihil dolore, officiis ullam ratione asperiores!
          </p>
          <div className="row2">
            <div className="column left">
              <h6>United States</h6>
              <hr />
              <div className="col-left">
                <span>State</span>
                <span>State</span>
                <span>State</span>
                
              </div>
            </div>
            <div className="column right">
              <h6>International</h6>
              <hr />
              <div className="col-right">
                <p>Canada</p>
                <p>Columbia</p>
                <p>Germany</p>
                <p>Nicaragua</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}