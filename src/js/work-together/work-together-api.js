import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function fetchcooperation(user) {
   const response = await axios.post('/requests', user);
   return response.data ;
}


