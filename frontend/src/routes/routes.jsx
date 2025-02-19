
import { createBrowserRouter } from 'react-router-dom';
import RegisterationPage from '../pages/RegisterationPage';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SearchPage from '../pages/SearchPage';
import FeedBackPage from '../pages/FeedBackPage';

const route = createBrowserRouter([
    { path: '' , element: <HomePage /> },
    { path: '/about' , element: <AboutPage /> },
    { path: '/search' , element: <SearchPage /> },
    { path: '/user-login' , element: <LoginPage /> },
    { path: '/admin-login' , element: <LoginPage /> },
    { path: '/register' , element: <RegisterationPage /> },
    { path: '/feedback' , element: <FeedBackPage /> },
])

export default route