import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddProject } from "../screens/addproject";
import { Project } from "../screens/project";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="add/" element={<AddProject />} />
          <Route path="add/:id" element={<AddProject />} />
        </Routes>
      </Router>
    </>
  );
}