import React from 'react';

const Carousel = () => {
  const imageStyle = {
    height: '500px',
    width: '100%',
    objectFit: 'cover', // Ensures the image covers the entire container
  };

  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800"
            className="d-block w-100"
            alt="Samosa"
            style={imageStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://i1.wp.com/www.teacoffeecup.com/wp-content/uploads/2019/09/regular-cold-coffee.jpg?fit=367%2C550&ssl=1"
            className="d-block w-100"
            alt="Cold Coffee"
            style={imageStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://simmertoslimmer.com/wp-content/uploads/2022/10/Masala-Chai-Tea.jpg"
            className="d-block w-100"
            alt="Masala Chai"
            style={imageStyle}
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
