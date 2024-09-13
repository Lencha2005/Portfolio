import axios from "axios";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReviews(data) {
    const response = await axios.get('/reviews', data);
    return response.data;
 }