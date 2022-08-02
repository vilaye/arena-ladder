import TeamMember from "./TeamMember";
import { Link } from "react-router-dom";
import style from "./TeamCard.module.css";

function TeamCard(props) {

    return (
      <>
        <table className={style.teamtable}>
          <caption>
            <Link to={`/team/${props.team.id}`} state={{ team: props.team }}>
              {props.team.teamName}
            </Link>
          </caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Race</th>
              <th>Win</th>
              <th>Loss</th>
              <th>Ratio</th>
              <th>Rating</th>
              <th>Server</th>
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


export default TeamCard;
