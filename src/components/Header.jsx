import { img } from '../images/karbala-header.jpg';

const Header = () => {
  <div className="card text-bg-dark">
    <img src={img} className="card-img" alt="..." />
    <div className="card-img-overlay">
      <h1 className="card-title">Iraq</h1>
    </div>
  </div>;
};

export default Header;
