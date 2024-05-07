import axios from "axios";
// import "dot-env";

const { REACT_APP_API_URL, REACT_APP_API_VER } = process.env

const instance = axios.create({
    baseURL: `${REACT_APP_API_URL}/${REACT_APP_API_VER}`,
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;