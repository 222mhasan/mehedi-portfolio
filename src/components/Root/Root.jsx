import { Outlet } from "react-router-dom";

const root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">               
                <Outlet></Outlet>
            </div>
           
        </div>
    );
};

export default root;