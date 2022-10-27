import { useState, useEffect } from "react";
import CutoffList from "../components/cutoff/CutoffList";
import style from "./Cutoff.module.css";
import Axios from "axios";
import rankone from "../components/images/rankone.png";
import gladiator from "../components/images/gladiator.png";
import duelist from "../components/images/duelist.png";
import rival from "../components/images/rival.png";
import challenger from "../components/images/challenger.png";

  
function CutoffPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCutoffs, setLoadedCutoffs] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://wgbgwilw20.execute-api.eu-central-1.amazonaws.com/wow-arena/cutoffs"
    ).then((response) => {
      setIsLoading(false);
      setLoadedCutoffs(response.data[0]);
    });
  }, []);

  const rankoneImg = (
    <img className={style.title} src={`${rankone}`} alt="test" />
  );
  const gladiatorImg = (
    <img className={style.title} src={`${gladiator}`} alt="test" />
  );
  const duelistImg = (
    <img className={style.title} src={`${duelist}`} alt="test" />
  );
  const rivalImg = <img className={style.title} src={`${rival}`} alt="test" />;
  const challengerImg = (
    <img className={style.title} src={`${challenger}`} alt="test" />
  );

  const twos = {
    r1: loadedCutoffs.twosR1,
    glad: loadedCutoffs.twosGlad,
    duelist: loadedCutoffs.twosDuelist,
    rival: loadedCutoffs.twosRival,
    challenger: loadedCutoffs.twosChallenger,
  };

  const threes = {
    r1: loadedCutoffs.threesR1,
    glad: loadedCutoffs.threesGlad,
    duelist: loadedCutoffs.threesDuelist,
    rival: loadedCutoffs.threesRival,
    challenger: loadedCutoffs.threesChallenger,
  };

  const fives = {
    r1: loadedCutoffs.fivesR1,
    glad: loadedCutoffs.fivesGlad,
    duelist: loadedCutoffs.fivesDuelist,
    rival: loadedCutoffs.fivesRival,
    challenger: loadedCutoffs.fivesChallenger,
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <>
      <section className={style.cutoffs}>
        <CutoffList cutoffs={twos} bracket={"2v2"} />
        <CutoffList cutoffs={threes} bracket={"3v3"} />
        <CutoffList cutoffs={fives} bracket={"5v5"} />
      </section>
      <section className={style.info}>
        <div>
          <p>
            At the end of each Arena season, eligible players get rewards based
            on their rating. Season 4 features a unique title—the “Brutal
            Gladiator”— and players who reach the top of the bracket in their
            region will receive seasonal rewards as follows:
          </p>
          <p>
            To qualify for a seasonal reward, your personal arena rating needs
            to be within 100 points of your team’s rating, and you must have
            participated in 20% of your team’s games.
          </p>
        </div>
        <div>
          <p className={style.seasonalRewards}>Seasonal Rewards</p>
          <table className={style.seasonaltable}>
            <tbody>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Cutoff</th>
              </tr>
              <tr>
                <td>{rankoneImg}</td>
                <td>Brutal Gladiator</td>
                <td>(Top 0.1%)</td>
              </tr>
              <tr>
                <td>{gladiatorImg}</td>
                <td>Gladiator</td>
                <td>(Top 0.5%)</td>
              </tr>
              <tr>
                <td>{duelistImg}</td>
                <td>Duelist</td>
                <td>(Top 0.5% – 3%)</td>
              </tr>
              <tr>
                <td>{rivalImg}</td>
                <td>Rival</td>
                <td>(Top 3% – 10%)</td>
              </tr>
              <tr>
                <td>{challengerImg}</td>
                <td>Challenger</td>
                <td>(Top 10% – 35%)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default CutoffPage;
