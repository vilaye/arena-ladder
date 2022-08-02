import style from "./CutoffList.module.css";

function CutoffList({ cutoffs, bracket }) {
  console.log(cutoffs);

  const titles = [
    "Brutal Gladiator",
    "Gladiator",
    "Duelist",
    "Rival",
    "Challenger",
  ];
  return (
    <section>
      <h2>{bracket}</h2>
      <table className={style.cutofftable}>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Rating</th>
          </tr>
          <tr>
            <td>{titles[0]}</td>
            <td>{cutoffs.r1}</td>
          </tr>
          <tr>
            <td>{titles[1]}</td>
            <td>{cutoffs.glad}</td>
          </tr>
          <tr>
            <td>{titles[2]}</td>
            <td>{cutoffs.duelist}</td>
          </tr>
          <tr>
            <td>{titles[3]}</td>
            <td>{cutoffs.rival}</td>
          </tr>
          <tr>
            <td>{titles[4]}</td>
            <td>{cutoffs.challenger}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default CutoffList;
