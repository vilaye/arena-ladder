import LadderEntry from "./LadderEntry";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./LadderList.module.css";

import useTable from "../hooks/TableLogic";
import LadderFooter from "./LadderFooter";

const LadderList = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);

  return (
    <>
      <LadderFooter range={range} slice={slice} setPage={setPage} page={page} />
      <table className={style.laddertable}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Team Name</th>
            <th>Members</th>
            <th>Rating</th>
            <th>Stats</th>
            <th>Ratio</th>
            <th>Server</th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el, index) => (
            <LadderEntry
              key={uuidv4()}
              id={index}
              rank={el.rank}
              teamname={el.team.name}
              members={slice}
              rating={el.rating}
              win={el.season_match_statistics.won}
              total={el.season_match_statistics.played}
              server={el.team.realm.slug}
              faction={el.hasOwnProperty("faction") ? el.faction.type : null}
            />
          ))}
        </tbody>
      </table>
      <LadderFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default LadderList;
