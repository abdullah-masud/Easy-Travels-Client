import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
// import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Booking from "../Pages/Booking/Booking";
import TanzaniaSafaris from "../Pages/Home/SafariDestinations/TanzaniaSafaris";
import KenyaSafaris from "../Pages/Home/SafariDestinations/KenyaSafaris";
import SouthAfricaSafaris from "../Pages/Home/SafariDestinations/SouthAfricaSafaris";
import BotswanaSafaris from "../Pages/Home/SafariDestinations/BotswanaSafaris";

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
            {
                path: "/tanzania-safaris",
                element: <TanzaniaSafaris />,
            },
            {
                path: "/kenya-safaris",
                element: <KenyaSafaris />,
            },
            {
                path: "/south-africa-safaris",
                element: <SouthAfricaSafaris />,
            },
            {
                path: "/botswana-safaris",
                element: <BotswanaSafaris />,
            },
        ],
    },
]);
export default router;