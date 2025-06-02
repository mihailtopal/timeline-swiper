import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Lines from "../BackgroundLines/Lines";
import PageTitle from "../PageTitle/PageTitle";
import Period from "../Period/Period";
import Pagination from "../Pagination/Pagination";
import TimeCircle from "../TimeCircle/TimeCircle";
import TimelineSwiper from "../TimeLineSwiper/TimeLineSwiper";
import { timelineData, TimelinePeriod } from "../../mock/timelineData";

function TimeLineMain() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [pointers, setPointers] = useState<TimelinePeriod[]>(timelineData);

  useEffect(() => {
    setPointers(timelineData);
  }, [timelineData]);

  return (
    <div className={styles.main__container}>
      <Lines />
      <PageTitle title={"Исторические даты"} />
      <Period label={pointers[activeIndex].label} />
      <Pagination
        pageCount={pointers.length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <TimeCircle
        pointers={pointers}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <TimelineSwiper data={pointers[activeIndex].events} />
    </div>
  );
}

export default TimeLineMain;
