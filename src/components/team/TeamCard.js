import Team from "./Team";

function TeamCard(props) {
    console.log(props.team.members);


    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Race</th>
            <th>Win</th>
            <th>Loss</th>
            <th>Ratio</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {props.team.members.map((member) => (
            <Team
                key={member.id}
                id={member.id}
                name={member.name}
                class={member.class}
                race={member.race}
                members={member.teamMembers}
                rating={member.rating}
                win={member.win}
                lost={member.lost}
                realm={member.realm}
            />
          ))}
        </tbody>
      </table>
    );
}

export default TeamCard;