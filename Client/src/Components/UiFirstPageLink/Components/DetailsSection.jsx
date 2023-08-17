import React from 'react'
import caloriesImg from '../assets/img/calories.webp'
import goofleMap from "../assets/img/googlemap.gif"

function DetailsSection() {
  return (
    <>
    <section id="details" className="details">
      <div className="container">
        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={caloriesImg} className="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-4" data-aos="fade-up">
            <h3>Page show</h3>
            <p className="fst-italic">
             Calories graph
            </p>
            <ul>
              <li><i className="bi bi-check"></i>Breakfirst.</li>
              <li><i className="bi bi-check"></i> Lunch</li>
              <li><i className="bi bi-check"></i> Dinner.</li>
              <li><i className="bi bi-check"></i> Snack.</li>
            </ul>
            <p>
              Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia
            </p>
          </div>
        </div>
    </div>
    </section>

    
    <section id="details" className="details">
          <div className="container">
    
            <div className="row content">
              <div className="col-md-4" data-aos="fade-right">
                <img src={goofleMap} className="img-fluid" alt="" />
              </div>
              <div className="col-md-8 pt-4" data-aos="fade-up">
                <h3>Page show</h3>
                <p className="fst-italic">
                Program create
                </p>
                <ul>
                  <li><i className="bi bi-check"></i>Create </li>
                  <li><i className="bi bi-check"></i> Join </li>
                  <li><i className="bi bi-check"></i> Make your mate</li>
                </ul>
                <p>
                  Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia
                </p>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default DetailsSection