import Dashboard from "pages/Dashboard";
import { lazy, Suspense } from "react";
import { Navigate, Routes,Route } from "react-router-dom";

const Home = lazy(() => import('pages/Dashboard'));

export const PrivateRoutes: React.FC = () => {
   return (
        <Suspense fallback={<>loading...</>}>
            <Routes>
                <Route path="/" element={<Dashboard />} />

                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </Suspense>
   );
};