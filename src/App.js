import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import Results from "./components/Results";
import DefaultLayout from "./components/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="/home" element={<ImageUpload />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
