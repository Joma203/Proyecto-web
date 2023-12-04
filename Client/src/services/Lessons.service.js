import axios from "axios";
const BASE_URL = "http://localhost:3500/api";

export const getLessons = async () =>{
    const response = await axios.get(`${BASE_URL}/lesson`);
    return (response.data.leccion);
}