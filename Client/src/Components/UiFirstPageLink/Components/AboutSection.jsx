import React from 'react'

function AboutSection() {
  return (
    <>
    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
          </div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <h3>This application is diet motivated app with user social comunity </h3>
            <p>Here more detail ......</p>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon"><i className="bx bx-fingerprint"></i></div>
              <h4 className="title"><a href="">Tracking Daily recode</a></h4>
              <p className="description">Halth check Daily recodde to create</p>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon"><i className="bx bx-gift"></i></div>
              <h4 className="title"><a href="">Creative activity</a></h4>
              <p className="description">Use google map/ local user join/create own activities</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default AboutSection