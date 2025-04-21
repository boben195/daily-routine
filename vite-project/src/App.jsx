import { Routes, Route } from "react-router-dom";
import "./App.css";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import DayView from "./pages/DayViewPage/DayView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CalendarPage />} />
      <Route path="/day/:date" element={<DayView />} />
    </Routes>
  );
}

export default App;
