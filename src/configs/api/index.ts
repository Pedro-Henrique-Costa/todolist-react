import axios from "axios";

//pode usar outra api basta abrir a porta e mudar a URL aqui
export const api = axios.create({
    baseURL: 'http://api.jsonserver.io/tasks',
    headers: {
        "X-Jsio-Token" : "93f7cb4e343d536ee78ed32e71342735"
    }
});

