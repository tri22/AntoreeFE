
import axios from "axios";

export const getAllTeacher = async () => {
    try {
        const response = await axios.get("https://antoreebe.onrender.com/api/v1/user/teachers");
        return response.data;
    } catch (error) {
        console.error("Get All Teachers API Error", error);
        throw error;
    }
};

export const getProfileById = async (id) => {
    try {
        const response = await axios.get(`https://antoreebe.onrender.com/api/v1/profile/${id}`);
        return response.data;
    } catch (error) {
        console.error("Get Teacher By ID API Error", error);
        throw error;
    }
};


export const getUserById = async (id) => {
    try {
        const response = await axios.get(`https://antoreebe.onrender.com/api/v1/user/${id}`);
        return response.data;
    } catch (error) {
        console.error("Get Teacher By ID API Error", error);
        throw error;
    }
};
