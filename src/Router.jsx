import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
export default function RouterReact() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Event />} />
      <Route path="event/lesson/:slug" element={<Event />} />
    </Routes>
  </Router>
  );
}
