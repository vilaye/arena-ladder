import { useLocation } from 'react-router-dom';
import TeamCard from '../components/team/TeamCard';


function TeamPage() {
    const location = useLocation();
    const { team } = location.state;
    return (
        <TeamCard team={team}></TeamCard>
    );

}

export default TeamPage;