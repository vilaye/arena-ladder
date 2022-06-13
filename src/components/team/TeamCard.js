
function TeamCard(props) {
    const team = props.team

    if (team)

    return (
        <div>
            {team.teamname}
        </div>
    );
}

export default TeamCard;