import { useSelector, useDispatch } from "react-redux";

import { JobPosition } from "./JobPosition";
import { selectVisiblePositions } from "../store/positions/positions-selector";
import { addFilter } from "../store/filters/filters-actions";
import { selectFilters } from "../store/filters/filters-selectors";

export function JobList() {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

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
