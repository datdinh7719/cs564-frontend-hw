import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Population = () => {
  const CountriesAPI =
    "https://cs464p564-frontend-api.vercel.app/api/countries";

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const LoadingSpinner = () => (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

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
    return LoadingSpinner;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const chartData = {
    labels: countries.map((country) => country.name),
    datasets: [
      {
        label: "Population",
        data: countries.map((country) => country.population),
        backgroundColor: [
          "rgba(255, 87, 51, 0.8)",
          "rgba(51, 255, 87, 0.8)",
          "rgba(51, 87, 255, 0.8)",
          "rgba(255, 51, 161, 0.8)",
          "rgba(255, 215, 0, 0.8)",
          "rgba(138, 43, 226, 0.8)",
          "rgba(0, 206, 209, 0.8)",
          "rgba(255, 140, 0, 0.8)",
          "rgba(255, 99, 71, 0.8)",
          "rgba(154, 205, 50, 0.8)",
          "rgba(210, 105, 30, 0.8)",
          "rgba(32, 178, 170, 0.8)",
          "rgba(199, 21, 133, 0.8)",
        ],
        borderColor: "rgba(0, 0, 0, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        type: "logarithmic",
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="container my-5">
      <h1 className="text-center mb-4">South American Countries Population</h1>
      {loading ? (
        LoadingSpinner
      ) : (
        <div className="d-flex justify-content-center">
          <div
            className="chart-container"
            style={{ width: "80%", maxWidth: "900px" }}
          >
            <Bar data={chartData} options={options} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Population;
