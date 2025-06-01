import React from "react";
import styles from "../Pagination/styles.module.scss";
import CircleButton from "../Buttons/CircleButton";

type PaginationProps = {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  activeIndex: number;
};

function Pagination({
  setActiveIndex,
  pageCount,
  activeIndex,
}: PaginationProps) {
  const handleNextItem = () => {
    setActiveIndex((prev) => (prev < pageCount - 1 ? prev + 1 : prev));
  };
  const handlePrevItem = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const paginationCounter = `0${activeIndex + 1}/0${pageCount}`;

  return (
    <nav className={styles.pagination__container}>
      <output className={styles.pagination__counter}>
        {paginationCounter}
      </output>
      <div className={styles.buttons__container}>
        <CircleButton
          direction="left"
          onClick={handlePrevItem}
          disabled={activeIndex === 0}
        />
        <CircleButton
          direction="right"
          onClick={handleNextItem}
          disabled={activeIndex === pageCount - 1}
        />
      </div>
    </nav>
  );
}

export default Pagination;
