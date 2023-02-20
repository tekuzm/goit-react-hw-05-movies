import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => <Link to={to}>{children}</Link>;

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
