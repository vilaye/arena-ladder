import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import style from "./LadderEntry.module.css";
import rankone from "../images/rankone.png"
import gladiator from "../images/gladiator.png"
import duelist from "../images/duelist.png"
import rival from "../images/rival.png"
import challenger from "../images/challenger.png";

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


  function title() {
    function image(title) {
      return <img className={style.title} src={`${title}`} alt="test" />;
    }

    if (props.cutoff.r1 <= props.rating) {
      return image(rankone)
    } else if (props.cutoff.glad <= props.rating && props.cutoff.r1 > props.rating) {
      return image(gladiator);
    } else if (props.cutoff.duelist <= props.rating && props.cutoff.glad > props.rating) {
      return image(duelist);
    }else if (props.cutoff.rival <= props.rating && props.cutoff.duelist > props.rating) {
      return image(rival);
    }else if (props.cutoff.challenger <= props.rating && props.cutoff.rival > props.rating) {
      return image(challenger);
    }
  }

  const total = props.win + props.lost;
  const percent = Math.round((props.win / total) * 100);

  return (
    <tr key={uuidv4()} className={style.ladderentry}>
      <td className={style.title}>{title()}</td>
      <td>
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
