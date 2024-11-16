import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1>Would you like to learn more about South America?</h1>
        <p className="mt-3">Explore the following options:</p>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <Link to="/List" className="btn btn-primary m-2">
            List of All Countries
          </Link>
          <Link to="/Population" className="btn btn-success m-2">
            Population Data
          </Link>
          <Link to="/GDP" className="btn btn-info m-2">
            GDP Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
