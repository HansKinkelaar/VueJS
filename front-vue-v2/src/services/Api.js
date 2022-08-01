/**
 *  file: src/services/Api.js
 *  data: 01/08/2022
 *  description: arquive how incialize 'axios' and the requests from HTTP's
 */

import axios from "axios";

export default () => axios.create({
    // 'baseURL' do Back-End -> fará a comunicação do Front com o Back
    baseURL: 'http://localhost:3000/api'
})