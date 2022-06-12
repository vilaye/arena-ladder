import { useState, useEffect } from "react";
import LadderList from "../components/ladder/LadderList";
import Token from "../components/tokens/Token";
import style from "./Ladder.module.css";
import React from "react";

function LadderPage() {
  const [isLoading2, setIsLoading2] = useState(true);
  const [loadedLadder2, setLoadedLadder2] = useState([]);

  const [isLoading3, setIsLoading3] = useState(true);
  const [loadedLadder3, setLoadedLadder3] = useState([]);

  const [isLoading5, setIsLoading5] = useState(true);
  const [loadedLadder5, setLoadedLadder5] = useState([]);

  const [twosState, setTwos] = useState(false);
  const [threesState, setThrees] = useState(true);
  const [fivesState, setFives] = useState(false);

  useEffect(() => {
    setIsLoading2(true);
    fetch(
      `https://eu.api.blizzard.com/data/wow/pvp-region/0/pvp-season/4/pvp-leaderboard/2v2?namespace=dynamic-classic-eu&locale=en_EU&access_token=${Token()}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const entries = [];

        for (const key in data) {
          const entry = {
            id: key,
            ...data[key],
          };
          entries.push(entry);
        }

        const actualLadder = [];
        Object.keys(entries[4]).map((keyName, i) =>
          actualLadder.push(entries[4][keyName])
        );

        setIsLoading2(false);
        setLoadedLadder2(actualLadder);
      });
  }, []);

  useEffect(() => {
    setIsLoading3(true);
    fetch(
      `https://eu.api.blizzard.com/data/wow/pvp-region/0/pvp-season/4/pvp-leaderboard/3v3?namespace=dynamic-classic-eu&locale=en_EU&access_token=${Token()}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const entries = [];

        for (const key in data) {
          const entry = {
            id: key,
            ...data[key],
          };
          entries.push(entry);
        }

        const actualLadder = [];
        Object.keys(entries[4]).map((keyName, i) =>
          actualLadder.push(entries[4][keyName])
        );

        setIsLoading3(false);
        setLoadedLadder3(actualLadder);
      });
  }, []);

  useEffect(() => {
    setIsLoading5(true);
    fetch(
      `https://eu.api.blizzard.com/data/wow/pvp-region/0/pvp-season/4/pvp-leaderboard/5v5?namespace=dynamic-classic-eu&locale=en_EU&access_token=${Token()}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const entries = [];

        for (const key in data) {
          const entry = {
            id: key,
            ...data[key],
          };
          entries.push(entry);
        }

        const actualLadder = [];
        Object.keys(entries[4]).map((keyName, i) =>
          actualLadder.push(entries[4][keyName])
        );

        setIsLoading5(false);
        setLoadedLadder5(actualLadder);
      });
  }, []);

  function allStatesFalse() {
    setTwos(false);
    setThrees(false);
    setFives(false);
  }

  function twosList() {
    allStatesFalse();
    setTwos(true);
  }
  function threesList() {
    allStatesFalse();
    setThrees(true);
  }
  function fivesList() {
    allStatesFalse();
    setFives(true);
  }

  function LadderButtons() {
    return (
      <div className={style.ladderbuttons}>
        <button
          className={`${twosState === true ? style.active : ""}`}
          onClick={twosList}
        >
          2s
        </button>
        <button
          className={`${threesState === true ? style.active : ""}`}
          onClick={threesList}
        >
          3s
        </button>
        <button
          className={`${fivesState === true ? style.active : ""}`}
          onClick={fivesList}
        >
          5s
        </button>
        <br></br>
      </div>
    );
  }

  const twos = loadedLadder2.slice(0, 5000);
  const threes = loadedLadder3.slice(0, 5000);
  const fives = loadedLadder5.slice(0, 5000);

  if (isLoading3) {
    return (
      <div>
        <p>Loading ...</p>

      </div>
    );
  }

  if (twosState) {
    return (
      <section>
        <LadderButtons />
        <LadderList data={twos} rowsPerPage={50} />
      </section>
    );
  }

  if (threesState) {
    return (
      <section>
        <LadderButtons />
        <LadderList data={threes} rowsPerPage={50} />
      </section>
    );
  }

  if (fivesState) {
    return (
      <section>
        <LadderButtons />
        <LadderList data={fives} rowsPerPage={50} />
      </section>
    );
  }
}

export default LadderPage;
