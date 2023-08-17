import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchIraqWeather } from '../redux/slice'; // Use your action for fetching province details

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
      <div className="table-responsive">
        <table className="table table-striped table-primary table-hover">
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
    </div>
  );
};

export default ProvinceDetails;
