import "./User.css";

/** User Component
 * 
 * Card that renders a user's name and email.
 * 
 * List of users rendered by Admin
 * 
 * Found in: Admin
 */

const User = ({ id, email, firstName, lastName }) => {

    return (
        <div className="UserCard card">
            <div className="card-body">
                <ul>
                    <li>{firstName} {lastName}</li>
                    <li>{email}</li>
                </ul>
            </div>
        </div>
    );
};

export default User;