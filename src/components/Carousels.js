import React from 'react';

const Carousels = () => {
  const carouselStyle = {
    width: '100%',
    height: '800px',
    objectFit: 'cover', // Ensures the image covers the entire container
  };

  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/18/21/30/coffee-3163596_640.jpg"
            className="d-block w-100"
            alt="First Slide"
            style={carouselStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2021/01/21/07/17/samosa-5936466_640.jpg"
            className="d-block w-100"
            alt="Second Slide"
            style={carouselStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://cdn.pixabay.com/photo/2017/05/11/19/49/iced-coffee-2305203_640.jpg"
            className="d-block w-100"
            alt="Third Slide"
            style={carouselStyle}
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousels;
