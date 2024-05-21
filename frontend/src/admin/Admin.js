import { useState, useEffect } from "react";

import User from "../user/User";
import Loading from "../common/Loading";
import Alert from "../common/Alert";

/** Admin Component
 * 
 * Admin page that shows list of all registered users. 
 * 
 * route: /admin
 * 
 * Other component used: Loading, Alert
 */

const Admin = ({ getAllUsers }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await getAllUsers();
                setUsers(result.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers()
    }, [getAllUsers]);

    if (loading) return <Loading />;
    if (error) return <Alert type="danger" messages={[error]} />;

    return (
        <div className="UserList col-md-8 offset-md-2"> 
            <h3>Admin Page</h3>
            <ul>
                {users.map(user => (
                    <User
                        key={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        email={user.email}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Admin;