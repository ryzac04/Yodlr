
/** Loading Component 
 * 
 * Loading message used by components that fetch API data.
 * 
 * Components where Loading is used: Signup, Admin
 */

const Loading = () => {

    return (
        <div className="Loading">
            <div className="container text-center">
                <h1 className="mb-4 fw-bold">Loading...</h1>
            </div>
        </div>
    );
};

export default Loading;