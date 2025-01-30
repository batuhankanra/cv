import { createBrowserRouter } from "react-router";
import MainLayaout from "../MainLayout";
import Home from "../page/home";
import NotFound from "../page/NotFound";
import Resume from "../page/Resume";


const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayaout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'/resume',
                element:<Resume />
            },
            {
                path:'/*',
                element:<NotFound />
            }
        ]
    }
])
export default routes