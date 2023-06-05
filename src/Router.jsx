import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";
export default function RouterReact() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />

    </Routes>
  </Router>
  );
}
