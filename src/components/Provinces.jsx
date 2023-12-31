import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { fetchIraqWeather } from '../redux/slice';
import SearchFilter from './Search';

const Province = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state) => state.weather.weather);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    dispatch(fetchIraqWeather());
  }, [dispatch]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Function to generate icon URL
  const getIconUrl = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}.png`;

  if (weatherData === undefined) {
    return <p>Loading...</p>;
  }

  // eslint-disable-next-line max-len
  const filteredWeatherData = weatherData.filter((data) => data.province.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <div>
      <SearchFilter value={searchInput} onChange={handleSearchInputChange} />

      <div className="grid">
        {filteredWeatherData.length > 0 ? (
          filteredWeatherData.map((data) => (
            <Link to={`/province/${data.province}`} key={data.province}>
              <div
                className="card text-bg-blue"
                style={{ height: '28vh', width: '100%' }}
                key={data.province}
              >
                <div className="card-img-overlay">
                  <div className="adjust-heading">
                    <div className="location-heading">
                      <h5 className="card-title">{data.province}</h5>
                    </div>
                    <BsFillCaretRightFill className="icon-size" />
                  </div>
                  <p className="card-text">
                    <small>
                      {data.weather.main.temp}
                      {' '}
                      °C
                    </small>
                  </p>
                  <p>
                    <small>
                      {data.weather.weather[0].description}
                      <img
                        src={getIconUrl(data.weather.weather[0].icon)}
                        alt={data.weather.weather[0].description}
                        className="icon"
                      />
                    </small>
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Province;
