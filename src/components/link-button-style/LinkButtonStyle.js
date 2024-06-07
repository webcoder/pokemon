import { Link } from "react-router-dom";
import "./LinkButtonStyle.scss";
export default function LinkButtonStyle({ route, text, modifier }) {
  return (
    <Link className={modifier} to={route}>
      {text}
    </Link>
  );
}
