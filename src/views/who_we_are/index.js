import React, { Component } from 'react'

export default class who_we_are extends Component {
    render() {
        return (
            <div style={{marginTop: '20px'}} className="row">
        <div className="col-md-8">
          <div className="dsecondborder" id="dleftcontainer">
            <div className="dleftpane">
              <a style={{}} href>
                <img style={{width: '688px', height: 432}} src="https://images4.fanpop.com/image/photos/19500000/Very-Green-Forest-green-19511297-950-632.jpg" alt="" />
              </a> <br />
            </div>
          </div>
          <div className="container">
            <div style={{border: 'none', marginTop: '5%'}} className="dleftpane">
              <h4>Welcome to our Website!</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, quis quidem sunt suscipit doloribus quo dolorum 
                laborum molestias accusantium blanditiis.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="container">
            <div className="drightpane">
              <h3>News feed</h3>
              <hr style={{backgroundColor: '#fff'}} />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Saepe nam necessitatibus magni, laboriosam tempore id
                delectus animi minima nisi sapiente error eveniet eos, non,
                incidunt debitis distinctio suscipit? Beatae, adipisci?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Saepe nam necessitatibus magni, laboriosam tempore id
                delectus animi minima nisi sapiente error eveniet eos, non,
                incidunt debitis distinctio suscipit? Beatae, adipisci?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque ab, fuga totam ratione
                adipisci
                voluptas, quae natus dicta id at sunt iure officiis excepturi soluta tempore ducimus quam aliquam.
              </p>
            </div>
            <div className="dbottomrightpane">
              <h5>Bigshot, Zoo, &amp; Adds, P.C.</h5>
              <p>419 West South Street, Suite 4200<br />
                Houston, Texas 35983 <br />
                555-555-5555 (Phone) <br />
                555-555-5555 (fax) </p>
            </div>
          </div>
        </div>
      </div>
        )
    }
}