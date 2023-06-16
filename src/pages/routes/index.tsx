import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../landingPage";
import { HomePage } from "../homePage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
