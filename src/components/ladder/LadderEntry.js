import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import style from "./LadderEntry.module.css";

function LadderEntry(props) {

  // function classIcon() {
  //   const icons = [];
  //   if (props.members[props.id].team.members !== undefined) {
  //     for (let i = 0; i < props.members[props.id].team.members.length; i++) {
  //       icons.push(
  //         <div key={uuidv4()} className={style.tooltip}>
  //           <img
  //             key={uuidv4()}
  //             src={require(`../images/${
  //               props.members[props.id].team.members[i].character.playable_class
  //                 .id
  //             }.jpg`)}
  //             alt=""
  //           />
  //           <span className={style.tooltipText}>
  //             {props.members[props.id].team.members[i].character.name}
  //           </span>
  //         </div>
  //       );
  //     }
  //     return icons;
  //   }
  // }

  function members() {
    const members = [];
    if (props.members[props.id].team.members !== undefined) {
      for (let i = 0; i < props.members[props.id].team.members.length; i++) {
        members.push(
          <span
            key={uuidv4()}
            className={`_${
              props.members[props.id].team.members[i].character.playable_class
                .id
            }`}
          >
            {props.members[props.id].team.members[i].character.name}
          </span>,
          " "
        );
      }
      return members;
    }

    return members;
  }

  const percent = Math.round((props.win / props.total) * 100);
  const loss = props.total - props.win;

  return (
    <tr key={uuidv4()} className={style.ladderentry}>
      <td>{props.rank}</td>
      <td className={style.team}>
        <Link
          to={props.teamname}
          state={{ team: props}}
          className={`${props.faction === "HORDE" ? style.red : style.blue}`}
        >
          {props.teamname}
        </Link>
      </td>
      <td className={style.members}>{members()}</td>
      <td>{props.rating}</td>
      <td>
        {props.win}-{loss}
      </td>
      <td>{percent}%</td>
      <td style={{ textTransform: "capitalize" }}>{props.server}</td>
    </tr>
  );
}

export default LadderEntry;
