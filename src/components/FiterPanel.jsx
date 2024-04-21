import { useDispatch, useSelector } from "react-redux";

import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Stack } from "../ui/Stack";
import { selectFilters } from "../store/filters/filters-selectors";
import { delFilter, rstFilter } from "../store/filters/filters-actions";

export function FiterPanel() {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if (currentFilters.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge key={filter} variant="clearable" onClear={() => dispatch(delFilter(filter))}>
              {filter}
            </Badge>
          ))}
        </Stack>
        <button onClick={() => dispatch(rstFilter())} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
}
