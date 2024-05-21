import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../common/Loading";
import Alert from "../common/Alert";

/** Signup Component
 * 
 * Signup form htmlFor new users to register with Yodlr. 
 * 
 * On successful submission: 
 *   - calls signup function prop
 *   - redirects to Home page ("/")
 * 
 * route: /signup
 * 
 * Other component used: Loading, Alert
 */

const Signup = ({ signup }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: ""
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug("Signup",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors
    )

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        setFormErrors([]); // Reset form errors
        try {
            const result = await signup(formData);
            if (result.success) {
                navigate("/");
            } else {
                setFormErrors([result.error]);
            }
        } catch (error) {
            console.error("Signup failed:", error);
            setFormErrors(["Signup failed. Please try again."]);
        }
    };

    if (!formData) return <Loading />;

    return (
        <div className="ProfileForm col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <h3 className="heading-text">Signup Page</h3>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label className="form-label" htmlFor="email" >Email:</label>
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label" htmlFor="firstName" >First Name:</label>
                            <input
                                className="form-control"
                                id="firstName"
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label className="form-label" htmlFor="lastName" >Last Name:</label>
                            <input
                                className="form-control"
                                id="lastName"
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group mt-4">
                            {formErrors.length
                                ? <Alert type="danger" messages={formErrors} />
                                : null
                            }
                        </div>
                
                        <div className="d-grid">
                            <button className="btn btn-primary btn-block mt-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;