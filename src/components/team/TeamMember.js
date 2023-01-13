import style from "./TeamMember.module.css";
import { Link } from "react-router-dom";

function TeamMember(props) {

  if ((props.win + props.lost) !== 0){
    var ratio = Math.round((props.win / (props.win + props.lost)) * 100);
  } else {
    ratio = 0;
  }

  return (
    <tr key={props.id}>
      <td>
        <Link
          to={`/player/${props.name}`}
          state={{ member: props}}
          className={`_${props.class}`}
        >
          {props.name}
        </Link>
      </td>
      <td>{props.win}</td>
      <td>{props.lost}</td>
      <td>{ratio}%</td>
      <td>{props.rating}</td>
    </tr>
  );
}

export default TeamMember;
