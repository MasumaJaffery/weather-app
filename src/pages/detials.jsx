import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchIraqWeather } from '../redux/slice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img from '../images/banner.png';

const ProvinceDetails = () => {
  const { provinceName } = useParams();
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather);

  useEffect(() => {
    dispatch(fetchIraqWeather(provinceName)); // Fetch province details based on the provinceName
  }, [dispatch, provinceName]);

  const provinceDetails = weatherData.find((data) => data.province === provinceName);

  if (!provinceDetails) {
    return <p>Province details not found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="card text-bg-dark">
        <img src={img} className="card-img" alt="..." />
        <div className="card-img-overlay overlay-d" />
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-primary table-hover table">
          <thead>
            <tr>
              <th scope="col">Weather</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Country</td>
              <td>Iraq</td>
            </tr>
            <tr>
              <td>City</td>
              <td>{provinceDetails.province}</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>
                {provinceDetails.weather && provinceDetails.weather.main.temp}
                °C
              </td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>
                {provinceDetails.weather && provinceDetails.weather.main.humidity}
                %
              </td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>
                {provinceDetails.weather && provinceDetails.weather.main.pressure}
                mb
              </td>
            </tr>
            <tr>
              <td>Latitude</td>
              <td>
                {provinceDetails.weather && provinceDetails.weather.coord.lat}
              </td>
            </tr>
            <tr>
              <td>Longitude</td>
              <td>
                {provinceDetails.weather && provinceDetails.weather.coord.lon}
              </td>
            </tr>
            <tr>
              <td>Wind</td>
              <td>
                {provinceDetails.weather && provinceDetails.weather.wind.speed}
                m/s
              </td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                {provinceDetails.weather && provinceDetails.weather.weather[0].description}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ProvinceDetails;
