import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const CountriesAPI =
    "https://cs464p564-frontend-api.vercel.app/api/countries";

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await axios.get(CountriesAPI);
        setCountries(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch from Countries API");
        setLoading(false);
      }
    };
    getCountries();
  }, []);
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">List of Countries in South America</h1>
      <div className="row">
        {countries.map((country) => {
          const name = country.name || "Unknown Country";
          const flag = country.flag_png;
          const flagAlt = country.flag_alt || "No description available";
          const population = country.population
            ? country.population.toLocaleString()
            : "Unknown";
          const gdp =
            country.gdp_billions !== undefined
              ? `$${country.gdp_billions} billion`
              : "Unknown";
          const languages = Array.isArray(country.official_languages)
            ? country.official_languages.join(", ")
            : "N/A";

          return (
            <div key={country.id || Math.random()} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={flag}
                  className="card-img-top"
                  alt={flagAlt}
                  style={{ height: "12rem", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    <strong>Population:</strong> {population}
                  </p>
                  <p className="card-text">
                    <strong>GDP:</strong> {gdp}
                  </p>
                  <p className="card-text">
                    <strong>Official Languages:</strong> {languages}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{flagAlt}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
