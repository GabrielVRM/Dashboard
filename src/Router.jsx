import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Specialization from "./pages/Specialization"
export default function RouterReact() {
  return (
    <Router>
    <Routes>
      <Route path="/event" element={<Event />} />
      <Route path="/Specialization" element={<Specialization />} />
    </Routes>
  </Router>
  );
}
