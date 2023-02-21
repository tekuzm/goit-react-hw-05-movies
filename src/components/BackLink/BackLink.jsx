import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
