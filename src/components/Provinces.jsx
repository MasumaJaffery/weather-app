/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIraqWeather } from '../redux/slice';

// ... (imports and setup)

const Province = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather);

  useEffect(() => {
    dispatch(fetchIraqWeather());
  }, [dispatch]);

  // eslint-disable-next-line no-console
  console.log('weatherData:', weatherData); // Add this line to see the fetched data structure

  return (
    <div>
      <div>
        {weatherData && weatherData.length > 0 ? (
          weatherData.map((data) => (
            <div key={data.province}>
              <h4>{data.province}</h4>
              <p>
                Temperature:
                {' '}
                {data.weather.main.temp}
                {' '}
                °C
                Description:
                {' '}
                {data.weather.main.description}
              </p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

    </div>
  );
};

export default Province;
