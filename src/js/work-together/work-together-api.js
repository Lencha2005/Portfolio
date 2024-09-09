import axios from 'axios';
import { formEl } from '../work-together/work-together';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';
export async function fetchcooperation(user) {
   const response = await axios.post('/requests', user);
   return response.data ;
}
// async function getaxios(){
//     const response = await axios.get('/reviews');
//     console.log(response)
// }


