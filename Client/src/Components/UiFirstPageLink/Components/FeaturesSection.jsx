import React from 'react'

function FeaturesSection() {
  return (
    <>
    <section id="features" className="features">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Check The Features</p>
        </div>

        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="50">
              <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
              <h3><a href="">Daily Record</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <i className="ri-bar-chart-box-line" style={{color:"#5578ff"}}></i>
              <h3><a href="">Graphic</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="150">
              <i className="ri-calendar-todo-line" style={{color:"#e80368"}}></i>
              <h3><a href="">Daily Record</a></h3>
            </div>
          </div>
         
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay="250">
              <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
              <h3><a href="">Calories check</a></h3>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default FeaturesSection