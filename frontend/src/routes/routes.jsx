import { createBrowserRouter } from "react-router-dom";
import RegisterationPage from "../pages/RegisterationPage";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SearchPage from "../pages/SearchPage";
import FeedBackPage from "../pages/FeedBackPage";
import ServiceRegisterPage from "../pages/ServiceRegisterPage";
import QuatationReportPage from "../pages/QuatationReportPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AgentDashboardPage from "../pages/AgentDashboardPage";
import UserDashboardPage from "../pages/UserDashboardPage";
import QuatationEntryPage from "../pages/QuatationEntryPage";
import ManageOrdersPage from "../pages/ManageOrdersPage";
import PlaceOrderPage from "../pages/PlaceOrderPage";

const route = createBrowserRouter([
    { path: '' , element: <HomePage /> },
    { path: '/about' , element: <AboutPage /> },
    { path: '/search' , element: <SearchPage /> },
    { path: '/find-agent' , element: <SearchPage /> },
    { path: '/user-login' , element: <LoginPage /> },
    { path: '/agent-login' , element: <LoginPage /> },
    { path: '/admin-login' , element: <LoginPage /> },
    { path: '/register' , element: <RegisterationPage /> },
    { path: '/feedback' , element: <FeedBackPage /> },
    { path: '/service-registration' , element: <ServiceRegisterPage /> },
    { path: '/quatation-report' , element: <QuatationReportPage /> },
    { path: '/quatation-register' , element: <QuatationEntryPage /> },
    { path: '/admin-dashboard' , element: <AdminDashboardPage /> },
    { path: '/agent-dashboard' , element: <AgentDashboardPage /> },
    { path: '/customer-dashboard' , element: <UserDashboardPage /> },
    { path: '/manage' , element: <ManageOrdersPage /> },
    { path: '/place-order' , element: <PlaceOrderPage /> },

])

export default route;
