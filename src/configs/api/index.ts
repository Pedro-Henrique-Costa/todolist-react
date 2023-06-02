import axios from "axios";

//pode usar outra api basta abrir a porta e mudar a URL aqui
export const api = axios.create({
    baseURL: 'https://to-do-list-json-server-679q.onrender.com'
});

