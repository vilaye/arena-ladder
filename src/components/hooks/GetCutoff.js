import { useState, useEffect } from "react";
import Axios from "axios";

function useTest() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCutoffs, setLoadedCutoffs] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getCutoff").then((response) => {
      setIsLoading(false);
      setLoadedCutoffs(response.data[0]);
    });
  }, []);

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

  return { twos, threes, fives };
}

export default useTest;
