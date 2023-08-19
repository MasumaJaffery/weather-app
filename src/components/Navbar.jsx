import { NavLink } from 'react-router-dom';
import { BsFillHouseHeartFill, BsFillMicFill, BsStar } from 'react-icons/bs';
import Datee from './Date';
import Time from './Time';

const Navbar = () => (
  <>
    <div className="mainN">
      <div className="oneN">
        <NavLink to="/weather-app/" className="link"><BsFillHouseHeartFill /></NavLink>
        <Datee />
      </div>
      <div className="twoN">
        <NavLink to="/weather-app/" className="link"><h4>Today&apos;s Weather</h4></NavLink>
      </div>
      <div className="threeN">
        <Time />
        <BsFillMicFill />
        <BsStar />
      </div>
    </div>
  </>
);
export default Navbar;
