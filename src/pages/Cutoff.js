import { useState, useEffect } from "react";
import CutoffList from "../components/cutoff/CutoffList";
import Token from "../components/tokens/Token";
import style from "./Cutoff.module.css";

function CutoffPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCutoffs, setLoadedCutoffs] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://eu.api.blizzard.com/data/wow/pvp-region/0/pvp-season/3/pvp-reward/index?namespace=dynamic-classic-eu&locale=en_EU&access_token=${Token()}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cutoffs = [];

        for (const key in data) {
          const cutoff = {
            id: key,
            ...data[key],
          };
          cutoffs.push(cutoff);
        }

        const actualCutoff = [];
          Object.keys(cutoffs[2]).map((keyName, i) => (
              actualCutoff.push(cutoffs[2][keyName])
          ))

        setIsLoading(false);
        setLoadedCutoffs(actualCutoff);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

    const twos = loadedCutoffs.slice(0, 5);
    const threes = loadedCutoffs.slice(5, 10);
    const fives = loadedCutoffs.slice(10, 15);

  return (
    <section className={style.cutoffs}>
        <CutoffList cutoffs={twos} bracket={'2v2'} />
        <CutoffList cutoffs={threes} bracket={'3v3'} />
        <CutoffList cutoffs={fives} bracket={'5v5'} />
    </section>
  );
}

export default CutoffPage;
