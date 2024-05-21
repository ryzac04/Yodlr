import { BrowserRouter } from 'react-router-dom';

import YodlrApi from './api/api';
import NavBar from './routes/NavBar';
import AppRoutes from './routes/AppRoutes';

import './App.css';

/** Yodlr Application
 * 
 * Other components used: Navbar, AppRoutes 
 */

function App() {

  /** Handles new user signup.   */
  async function signup(data) {
    try {
      await YodlrApi.signup(data);
      return { success: true };
    } catch (error) {
      console.error("signup failed:", error);
      return { success: false, error }; 
    }
  };

  /** Retrieves all users from backend. */
  async function getAllUsers() {
    try {
      const users = await YodlrApi.getAllUsers();
      return { success: true, data: users };
    } catch (error) {
      console.error("error retrieving all users:", error);
      return { success: false, error };
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRoutes signup={signup} getAllUsers={getAllUsers} />
      </BrowserRouter>
    </div>
  );
};

export default App;