import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../pages/main";
import ModalProvider from '../providers/ModalProvider'

const AppRoutes = () => (
    <ModalProvider>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<MainPage />} />
            </Route>
        </Routes>
    </ModalProvider> 
)

export default AppRoutes