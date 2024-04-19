import { FiterPanel } from "./components/FiterPanel";
import { JobList } from "./components/JobList";
import { Header } from "./components/Header";

export function App() {
    return (
        <>
            <Header />
            <div className="container">
                <FiterPanel />
                <JobList />
            </div>
        </>
    );
}
