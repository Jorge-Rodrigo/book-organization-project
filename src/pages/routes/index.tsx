import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../landingPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<h1>Book Organization</h1>} />
    </Routes>
  );
};

export default RoutesMain;
