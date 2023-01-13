import TeamMember from "./TeamMember";
import { Link } from "react-router-dom";
import style from "./TeamCard.module.css";

function TeamCard(props) {
  if (props.team._id === "0") {
    return (
      <div>test</div>
    )
  } else {
    return (
      <>
        <table className={style.teamtable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Rank</th>
              <th>Win</th>
              <th>Loss</th>
              <th>Ratio</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <table className={style.teamtable}>
          <caption>
            <Link to={`/team/${props.team.id}`} state={{ team: props.team }}>
              {props.team.teamName}
            </Link>
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Win</th>
                <th>Loss</th>
                <th>Ratio</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {props.team.teamMembers.map((member) => (
              <TeamMember
                key={member.id}
                id={member.id}
                name={member.name}
                class={member.class}
                race={member.race}
                rating={member.rating}
                win={member.win}
                lost={member.lost}
                realm={member.realm}
              />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default TeamCard;
