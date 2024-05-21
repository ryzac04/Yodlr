import axios from "axios";

const BASE_URL = "http://localhost:3001"

class YodlrApi {
    static async signup(data) {
        const userData = { ...data, ['state']: 'active' };
        try {
            const response = await axios.post(`${BASE_URL}/users`, userData);
            return response.data;
            
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    };
    
    static async getAllUsers() {
        try {
            const response = await axios.get(`${BASE_URL}/users`);
            return response.data;
        } catch (error) {
            console.error("Error retrieving list of users:", error);
            throw error;
        }
    };

    static async getUser(id) {
        try {
            const response = await axios.get(`${BASE_URL}/users/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error finding user:", error);
            throw error;
        }
    };
};

export default YodlrApi;