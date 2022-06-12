import { Link } from "react-router-dom";
import style from './Navigation.module.css';

function Navigation() {

  return (
    <header >
      <nav>
        <ul className={style.navlist}>
          <li>
            <Link to="/">ARENAJUNKIES</Link>
          </li>
          <li>
            <Link to="/ladder">Ladder</Link>
          </li>
          <li>
            <Link to="/cutoff">Cutoffs</Link>
          </li>
          <li>
            <Link to="/arena-point-calculator">Arena Points Calculator</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
