import PropTypes from 'prop-types';
import Header from '../../components/navigation/Header';
import './dashboard.css';

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
      <Header {...props} />
    </div>
  );
};

Dashboard.propTypes = {
  setIsLoggedIn: PropTypes.func,
  userUsername: PropTypes.string,
};

export default Dashboard;
