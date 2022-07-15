import React, { useEffect } from "react";
import styles from "./LadderFooter.module.css";
import { v4 as uuidv4 } from "uuid";

const LadderFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <div className={styles.buttons}>
      <button
        key={uuidv4()}
        onClick={() => setPage(1)}
        className={`${page <= 2 ? styles.inactiveButton : styles.normalButton}`}
      >
        {range[0]}
      </button>
      <button
        key={uuidv4()}
        onClick={() => setPage(page - 3)}
        className={`${page <= 3 ? styles.inactiveButton : styles.normalButton}`}
      >
        ...
      </button>
      <button
        key={uuidv4()}
        className={`${
          page - 1 === 0 ? styles.inactiveButton : styles.normalButton
        }`}
        onClick={() => setPage(page - 1)}
      >
        {page - 1}
      </button>
      <button
        key={uuidv4()}
        className={styles.activeButton}
        onClick={() => setPage(page)}
      >
        {page}
      </button>
      <button
        key={uuidv4()}
        className={`${
          page + 1 === 101 ? styles.inactiveButton : styles.normalButton
        }`}
        onClick={() => setPage(page + 1)}
      >
        {page + 1}
      </button>

      <button
        key={uuidv4()}
        onClick={() => setPage(page + 3)}
        className={`${
          page >= 97 ? styles.inactiveButton : styles.normalButton
        }`}
      >
        ...
      </button>
      <button
        key={uuidv4()}
        onClick={() => setPage(100)}
        className={`${
          page >= 99 ? styles.inactiveButton : styles.normalButton
        }`}
      >
        {range.length}
      </button>
    </div>
  );
};

export default LadderFooter;
