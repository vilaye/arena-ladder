import { useLocation } from "react-router-dom";
import PlayerCard from "../components/player/PlayerCard";

function PlayerPage(props) {
  const location = useLocation();

  const player = location.state.member;

  return (
    <PlayerCard key={player.id} player={player}></PlayerCard>
  );
}

export default PlayerPage;
