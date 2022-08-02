import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import style from "./LadderEntry.module.css";
import r1 from "../images/r1.png"
import gladi from "../images/gladiator.png"

function LadderEntry(props) {

  function teamMembers() {
    const teamMembers = [];

    props.teamMembers.forEach((member) => {
      teamMembers.push(
        <span key={uuidv4()}>
          <Link
            to={`/player/${member.name}`}
            state={{ member }}
            className={`_${member.class}`}
            key={uuidv4()}
          >
            {member.name}
          </Link>
        </span>,
        " "
      );
    });
    return teamMembers;
  }

  const total = props.win + props.lost;
  const percent = Math.round((props.win / total) * 100);

  return (
    <tr key={uuidv4()} className={style.ladderentry}>
      <td>
        {<img src={`${gladi}`} alt="test" />}
        {props.rank}
      </td>
      <td className={style.team}>
        <Link
          to={`/team/${props.id}`}
          state={{ team: props }}
          className={`${props.faction === "HORDE" ? style.red : style.blue}`}
        >
          {props.teamName}
        </Link>
      </td>
      <td className={style.teamMembers}>{teamMembers()}</td>
      <td>{props.rating}</td>
      <td>
        {props.win}-{props.lost}
      </td>
      <td>{percent}%</td>
      <td style={{ textTransform: "capitalize" }}>{props.server}</td>
    </tr>
  );
}

export default LadderEntry;
