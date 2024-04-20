import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { FiterPanel } from "./components/FiterPanel";
import { JobList } from "./components/JobList";
import { Header } from "./components/Header";

import { addPositions } from "./store/positions/positions-actions";
import data from "./mock/data.json";

export function App() {
  // Асинхроно получить данные при монтировании приложения
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  });

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
