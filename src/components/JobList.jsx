import { useSelector, useDispatch } from "react-redux";

import { JobPosition } from "./JobPosition";
import { selectAllPositions } from "../store/positions/positions-selector";
import { addFilter } from "../store/filters/filters-actions";

export function JobList() {
  const dispatch = useDispatch();
  const positions = useSelector(selectAllPositions);

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
