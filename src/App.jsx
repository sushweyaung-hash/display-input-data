import { HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Register from "./pages/Register";

export default function App() {
  return (
    <HashRouter>
      <div style={{ padding: 24 }}>
        <Link to="/register">Go to Register</Link>

        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
