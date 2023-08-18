import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchIraqWeather } from '../redux/slice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img from '../images/1.jpg';
import img1 from '../images/2.jpg';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..." style={{ height: '70%' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." style={{ height: '70%' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="..." style={{ height: '70%' }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
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
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ProvinceDetails;
