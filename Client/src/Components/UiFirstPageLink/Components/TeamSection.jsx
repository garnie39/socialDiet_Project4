import React from 'react'
import Garnie from "../assets/img/team/garnie.png"
import Misa from "../assets/img/team/misa.png"

function TeamSection() {
  return (
    <>
    <section id="team" className="team">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Our Great Team</p>
        </div>

        <div className="row" data-aos="fade-left">

          <div className="col-lg-3 col-md-6">
            <div className="member" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src={Garnie} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Garine</h4>
                <span>Full stack developer</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="member" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src={Misa} className="img-fluid" alt="" /></div>
              <div className="member-info">
                <h4>Misa</h4>
                <span>Full stack developer</span>
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default TeamSection