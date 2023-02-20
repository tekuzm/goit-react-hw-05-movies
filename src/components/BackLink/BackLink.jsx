import { Link } from 'react-router-dom';

const BackLink = ({ to, children }) => <Link to={to}>{children}</Link>;

export default BackLink;
