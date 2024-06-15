import { useDispatch } from "react-redux";

import { JobPosition } from "./JobPosition";

import { addFilter } from "../filters/filters-slice";
import { usePositions } from "./use-positions";
import { useFetchPositions } from "./use-fetch-positions";

export function JobList() {
  const dispatch = useDispatch();

  useFetchPositions();
  const positions = usePositions();

  function handleAddFilter(filter) {
    dispatch(addFilter(filter));
  }

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  );
}
