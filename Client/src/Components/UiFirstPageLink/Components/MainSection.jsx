import React from 'react'
import mockup from "../assets/img/mockup.jpg"
import { Link } from 'react-router-dom'

function MainSection() {
  return (
    <>
    <section id="hero">

        <div className="container">
        <div className="row justify-content-between">
            <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
            <div data-aos="zoom-out">
                <h1>This is our last Project <span>Diet.Mate</span></h1>
                <h2>By Garine and Misa</h2>
                <div className="text-center text-lg-start">
                <Link to={"/userLogin" } className="btn-get-started scrollto">Get Started</Link>
                {/* <a href="/userLogin" className="btn-get-started scrollto">Get Started</a> */}
                <a href="#about" className="btn-get-started scrollto">Check About app</a>
                </div>
            </div>
            </div>
            <div className="col-lg-4 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="300">
            <img src={mockup} className="img-fluid animated" alt="" />
            </div>
        </div>
        </div>

        <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
        <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="wave1">
            <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
        </g>
        <g className="wave2">
            <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
        </g>
        <g className="wave3">
            <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
        </svg>

        </section>

{/* <main id="main"></main> */}
    </>
  )
}

export default MainSection