import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIraqWeather } from '../redux/slice';
import SearchFilter from './Search';

const Province = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather);
  // Search Intial AND Current State
  const [searchInput, setSearchInput] = useState('');
  // useEffect to display Provinces!
  useEffect(() => {
    dispatch(fetchIraqWeather());
  }, [dispatch]);
  // Search Filteration Process;
  // eslint-disable-next-line max-len
  const filteredWeatherData = weatherData.filter((data) => data.province.toLowerCase().includes(searchInput.toLowerCase()));
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <SearchFilter value={searchInput} onChange={handleSearchInputChange} />

      <div className="grid">
        {filteredWeatherData.length > 0 ? (
          filteredWeatherData.map((data) => (
            <div
              className="card text-bg-blue"
              style={{ height: '28vh', width: '100%' }}
              key={data.province}
            >
              <img src="..." className="card-img" alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title">{data.province}</h5>
                <p className="card-text">
                  <small>
                    {data.weather.main.temp}
                    {' '}
                    °C
                  </small>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Province;
