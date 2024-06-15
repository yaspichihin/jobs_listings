import { FiltersPanel } from "./features/filters/FiltersPanel";
import { JobList } from "./features/positions/JobList";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FiltersPanel />
        <JobList />
      </div>
    </>
  );
}
