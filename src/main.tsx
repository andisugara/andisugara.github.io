import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App.tsx";
import JokiTugas from "./JokiTugas.tsx";
import ViraPrivacy from "./ViraPrivacy.tsx";
import ViraTerms from "./ViraTerms.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/joki-tugas" element={<JokiTugas />} />
        <Route path="/vira/privacy" element={<ViraPrivacy />} />
        <Route path="/vira/terms" element={<ViraTerms />} />
        <Route path="/vira/privacy-policy" element={<Navigate to="/vira/privacy" replace />} />
        <Route path="/vira/terms-of-service" element={<Navigate to="/vira/terms" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

