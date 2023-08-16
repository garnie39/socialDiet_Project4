import React from 'react'
import photo1 from "../assets/img/gallery/gallery-1.jpg";
import photo2 from "../assets/img/gallery/gallery-2.jpg";
import photo3 from "../assets/img/gallery/gallery-3.jpg";
import photo4 from "../assets/img/gallery/gallery-4.jpg";
import photo5 from "../assets/img/gallery/gallery-5.jpg";
import photo6 from "../assets/img/gallery/gallery-6.jpg";
import photo7 from "../assets/img/gallery/gallery-7.jpg";
import photo8 from "../assets/img/gallery/gallery-8.jpg";

function GallerySection() {
  return (
    <>
     <section id="gallery" className="gallery">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Check our Gallery</p>
        </div>

        <div className="row g-0" data-aos="fade-left">

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="100">
              <a href="../assets/img/gallery/gallery-1.jpg" className="gallery-lightbox">
                <img src={photo1} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="150">
              <a href="../assets/img/gallery/gallery-2.jpg" className="gallery-lightbox">
                <img src={photo2} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="200">
              <a href="../assets/img/gallery/gallery-3.jpg" className="gallery-lightbox">
                <img src={photo3} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="250">
              <a href="../assets/img/gallery/gallery-4.jpg" className="gallery-lightbox">
                <img src={photo4} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="300">
              <a href="../assets/img/gallery/gallery-5.jpg" className="gallery-lightbox">
                <img src={photo5} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="350">
              <a href="../assets/img/gallery/gallery-6.jpg" className="gallery-lightbox">
                <img src={photo6} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="400">
              <a href="../assets/img/gallery/gallery-7.jpg" className="gallery-lightbox">
                <img src={photo7} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item" data-aos="zoom-in" data-aos-delay="450">
              <a href="../assets/img/gallery/gallery-8.jpg" className="gallery-lightbox">
                <img src={photo8} alt="" className="img-fluid" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default GallerySection