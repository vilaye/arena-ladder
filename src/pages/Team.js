import { useLocation } from 'react-router-dom';
import SingleTeamCard from "../components/team/SingleTeamCard";


function TeamPage() {
    const location = useLocation();
    
    const { team } = location.state;

    return (
        <SingleTeamCard team={team}></SingleTeamCard>
    );

}

export default TeamPage;