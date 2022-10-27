import style from "./CutoffList.module.css";
import rankone from "../images/rankone.png";
import gladiator from "../images/gladiator.png";
import duelist from "../images/duelist.png";
import rival from "../images/rival.png";
import challenger from "../images/challenger.png";

function CutoffList({ cutoffs, bracket }) {
  const titles = [
    "Brutal Gladiator",
    "Gladiator",
    "Duelist",
    "Rival",
    "Challenger",
  ];

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

  return (
    <section>
      <h2>{bracket}</h2>
      <table className={style.cutofftable}>
        <tbody>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>{rankoneImg}</td>
            <td>{titles[0]}</td>
            <td>{cutoffs.r1}</td>
          </tr>
          <tr>
            <td>{gladiatorImg}</td>
            <td>{titles[1]}</td>
            <td>{cutoffs.glad}</td>
          </tr>
          <tr>
            <td>{duelistImg}</td>
            <td>{titles[2]}</td>
            <td>{cutoffs.duelist}</td>
          </tr>
          <tr>
            <td>{rivalImg}</td>
            <td>{titles[3]}</td>
            <td>{cutoffs.rival}</td>
          </tr>
          <tr>
            <td>{challengerImg}</td>
            <td>{titles[4]}</td>
            <td>{cutoffs.challenger}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CutoffList;
