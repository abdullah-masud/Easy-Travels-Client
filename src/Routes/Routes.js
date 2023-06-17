import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
// import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Booking from "../Pages/Booking/Booking";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/booking",
                element: <Booking />,
            },
        ],
    },
]);
export default router;