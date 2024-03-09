import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { NavComponent } from "../Components/NavComponent";

export const CRMRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
