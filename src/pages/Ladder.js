import { useState, useEffect } from "react";
import LadderList from "../components/ladder/LadderList";
import Token from "../components/tokens/Token";
import style from "./Ladder.module.css";
import React from "react";

import Axios from "axios";

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
    Axios.get("http://localhost:3001/getTwos").then((response) => {
      setLoadedLadder2(response.data);
      setIsLoading2(false);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/getThrees").then((response) => {
      setLoadedLadder3(response.data);
      setIsLoading3(false);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/getFives").then((response) => {
      setLoadedLadder5(response.data);
      setIsLoading5(false);
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
        <LadderList data={loadedLadder2} rowsPerPage={50} />
      </section>
    );
  }

  if (threesState) {
    return (
      <section>
        <LadderButtons />
        <LadderList data={loadedLadder3} rowsPerPage={50} />
      </section>
    );
  }

  if (fivesState) {
    return (
      <section>
        <LadderButtons />
        <LadderList data={loadedLadder5} rowsPerPage={50} />
      </section>
    );
  }
}

export default LadderPage;
