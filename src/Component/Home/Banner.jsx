import React from "react";
import Carousel from "react-material-ui-carousel";
export default function Banner() {
  return (
    <div>
      <div className="container p-0">
        <div className="row">
        

        
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner h-50">
                <div class="carousel-item active">
                  <img
                    src="img/carousel1.jpg"
                    class=" h-50   img-fluid "
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/carousel2.jpg"
                    class="    img-fluid "
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/carousel3.jpg"
                    class="    img-fluid "
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev h-25  w-0 position-absolute mt-5   "
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon bg-black"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next h-25  w-0 position-absolute mt-5"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon bg-black "
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
           
            </div>
       
        </div>
      </div>
    </div>
  );
}
