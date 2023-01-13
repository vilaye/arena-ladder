import Axios from "axios";
import { useEffect, useState, React } from "react";
import TeamCard from "../team/TeamCard";
import style from "./PlayerCard.module.css";


function PlayerCard(props) {
  const [loadedTwosTeam, setTwosTeam] = useState([]);
  const [isLoadingTwos, setIsLoadingTwos] = useState(true);
  const [loadedThreesTeam, setThreesTeam] = useState([]);
  const [isLoadingThrees, setIsLoadingThrees] = useState(true);
  const [loadedFivesTeam, setFivesTeam] = useState([]);
  const [isLoadingFives, setIsLoadingFives] = useState(true);

  const placeHolder = {
    _id: "0"
  }

  useEffect(() => {
    Axios.get(
      `https://wgbgwilw20.execute-api.eu-central-1.amazonaws.com/wow-arena/twosteam?id=${props.player.id}`
    ).then((response) => {
      if (response.data != null) {
        setTwosTeam(response.data);
      } else {
        console.log("test");
        setTwosTeam(placeHolder);
      }
      setIsLoadingTwos(false);
    });

    Axios.get(
      `https://wgbgwilw20.execute-api.eu-central-1.amazonaws.com/wow-arena/threesteam?id=${props.player.id}`
    ).then((response) => {
      if (response.data != null) {
        setThreesTeam(response.data);
      } else {
        setThreesTeam(placeHolder);
      }
      setIsLoadingThrees(false);
    });

    Axios.get(
      `https://wgbgwilw20.execute-api.eu-central-1.amazonaws.com/wow-arena/fivesteam?id=${props.player.id}`
    ).then((response) => {
      if (response.data != null) {
        setFivesTeam(response.data);
      } else {
        setFivesTeam(placeHolder);
      }
      setIsLoadingFives(false);
    });
  }, []);

  var twosTeam = <TeamCard team={loadedTwosTeam} bracket="2v2"></TeamCard>;
  var threesTeam = <TeamCard team={loadedThreesTeam} bracket="3v3"></TeamCard>;
  var fivesTeam = (
    <TeamCard team={loadedFivesTeam} bracket="5v5"></TeamCard>
  );

  return (
    <>
      <section className={style.teams}>
        <div>{isLoadingTwos === false && twosTeam}</div>
        <div>{isLoadingThrees === false && threesTeam}</div>
        <div>{isLoadingFives === false && fivesTeam}</div>
      </section>
    </>
  );
}

export default PlayerCard;
