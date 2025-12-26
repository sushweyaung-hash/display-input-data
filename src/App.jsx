import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import SubmitData from "./pages/SubmitData";

export default function App() {
  return (
    <HashRouter>
      <div style={{ padding: 20 }}>
        <Link to="/register" style={{ marginRight: 12 }}>Register</Link>
        <Link to="/submit-data">Submit Data</Link>
      </div>

      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </HashRouter>
  );
}
