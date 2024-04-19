import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Stack } from "../ui/Stack";

export function FiterPanel() {
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge>
        </Stack>
        <button className="link">Clear</button>
      </div>
    </Card>
  );
}
