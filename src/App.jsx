import { Routes, Route, Link, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import SubmitData from "./pages/SubmitData";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/register">Register</Link> {" | "}
        <Link to="/submit-data">Submit Data</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/submit-data" element={<SubmitData />} />
      </Routes>
    </div>
  );
}
