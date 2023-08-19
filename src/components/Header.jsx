import img from '../images/karbala-header.jpg';

const Header = () => (
  <div className="card header" style={{ height: '100%', border: 'none' }}>
    <img src={img} className="card-img" alt="..." />
    <div className="overlay">
      <div className="Highlight">
        <h1>Iraq</h1>
        <h2>Weather Forecast</h2>
      </div>
    </div>
  </div>
);
export default Header;
