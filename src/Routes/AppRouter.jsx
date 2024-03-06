import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CRMRoutes } from "../CRM/routes/CRMRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/*" element={<CRMRoutes />} />
      </Routes>
    </>
  );
};
