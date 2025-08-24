import axios from "axios";


export const loginApi = async ({ email, password }) => {
    try {
        const response = await axios.post("https://antoreebe.onrender.com/api/v1/user/login", { email, password });
        return response;
    } catch (error) {
        console.error("Login API Error", error); // Log error chi tiết
        throw error;
    }
};

export const registerApi = async ({ email, password }) => {
    try {
        const response = await axios.post("https://antoreebe.onrender.com/api/v1/user/register", {
            email,
            password,
        });
        return response;
    } catch (error) {
        console.error("Register API Error", error);
        throw error;
    }
};


