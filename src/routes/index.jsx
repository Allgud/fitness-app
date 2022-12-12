import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../pages/main";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
        </Route>
    </Routes>
)

export default AppRoutes