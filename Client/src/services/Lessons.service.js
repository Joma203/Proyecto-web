import axios from "axios";
const BASE_URL = `${import.meta.env.VITE_API_URL}`;

export const getLessons = async () =>{
    const response = await axios.get(`${BASE_URL}/lesson`);
    return (response.data.leccion);
}