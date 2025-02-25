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
import ServicePage from "../pages/ServicePage";
import ServiceDetailsPage from "../pages/ServiceDetailsPage";
import AgentDetailPage from "../pages/AgentDetailPage";
import FeedBackDetailsPage from "../pages/FeedBackDetailsPage";
import CustomerFeedBackPage from "../pages/CustomerFeedBackPage";

const route = createBrowserRouter([
    { path: '' , element: <HomePage /> },
    { path: '/about' , element: <AboutPage /> },
    { path: '/find-agent' , element: <SearchPage /> },
    { path: '/agent-detail/:id' , element: <AgentDetailPage /> },
    { path: '/user-login' , element: <LoginPage /> },
    { path: '/agent-login' , element: <LoginPage /> },
    { path: '/admin-login' , element: <LoginPage /> },
    { path: '/register' , element: <RegisterationPage /> },
    { path: '/update' , element: <RegisterationPage /> },
    { path: '/feedback' , element: <FeedBackPage /> },
    { path: '/feedback-details' , element: <FeedBackDetailsPage /> },
    { path: '/feedback-details/:id' , element: <CustomerFeedBackPage /> },
    { path: '/service-registration' , element: <ServiceRegisterPage /> },
    { path: '/service-management' , element: <ServicePage /> },
    { path: '/service-detail/:id' , element: <ServiceDetailsPage /> },
    { path: '/quatation-report' , element: <QuatationReportPage /> },
    { path: '/quatation-register' , element: <QuatationEntryPage /> },
    { path: '/admin-dashboard' , element: <AdminDashboardPage /> },
    { path: '/agent-dashboard' , element: <AgentDashboardPage /> },
    { path: '/customer-dashboard' , element: <UserDashboardPage /> },

])

export default route;
