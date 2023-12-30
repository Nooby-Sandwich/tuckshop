import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Carousel from '../components/Carousels';

export default function Homepage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {/* Adjust the columns based on your design requirements */}
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
        <div className="col-md-3 col-lg-3 mb-3">
          <Card />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
