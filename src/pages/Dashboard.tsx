import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/"         >Home     </Link></li>
        <li><Link to="/about"    >About    </Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </>
  );
};
