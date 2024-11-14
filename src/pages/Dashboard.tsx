import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to={'/poc-react-router-loader' + '/'         }>Home     </Link></li>
        <li><Link to={'/poc-react-router-loader' + '/about'    }>About    </Link></li>
        <li><Link to={'/poc-react-router-loader' + '/dashboard'}>Dashboard</Link></li>
      </ul>
    </>
  );
};
