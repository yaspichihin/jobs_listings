import { useDispatch, useSelector } from "react-redux";

import { Badge } from "../../ui/Badge";
import { Card } from "../../ui/Card";
import { Stack } from "../../ui/Stack";
import { delFilter, rstFilters, selectFilters } from "./filters-slice";

export function FiltersPanel() {
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
        <button onClick={() => dispatch(rstFilters())} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
}
