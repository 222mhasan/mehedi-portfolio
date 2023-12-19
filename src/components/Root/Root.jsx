import { Outlet } from "react-router-dom";

const root = () => {
    return (
        <div>
            <div className="mx-auto">               
                <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default root;