import { Outlet } from "react-router-dom";
import Navber from "../Shared/Navber/NavberSticky";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-nunito max-w-screen-xl mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;