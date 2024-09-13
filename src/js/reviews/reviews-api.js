import axios from "axios";

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

export async function getReviews() {
    const response = await axios.get('api/reviews');
    return response.data;
 }