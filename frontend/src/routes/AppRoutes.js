import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../home/Home";
import Signup from "../signup/Signup";
import Admin from "../admin/Admin";

/** AppRoutes Component
 * 
 * Contains routes for signup and the admin page which will show a list of all users. 
 * 
 * Visiting a non-existent route redirects to the homepage. 
 */

const AppRoutes = ({ signup, getAllUsers }) => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup signup={signup} />} />
            <Route exact path="/admin" element={<Admin getAllUsers={getAllUsers} />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes; 