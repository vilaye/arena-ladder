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
          {slice.map((team) => (
            <LadderEntry
              key={team.id}
              id={team.id}
              rank={team.rank}
              teamname={team.teamName}
              members={team.teamMembers}
              rating={team.rating}
              win={team.win}
              lost={team.lost}
              server={team.realm}
              faction={team.hasOwnProperty("faction") ? team.faction : null}
            />
          ))}
        </tbody>
      </table>
      <LadderFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default LadderList;
