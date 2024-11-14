import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <ul>
        <li><Link to="/"         >Home     </Link></li>
        <li><Link to="/about"    >About    </Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </>
  );
};
