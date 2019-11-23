import axios from "axios/index";

export function getDataService(page,size) {
    return new Promise(((resolve, reject) => {
        axios({
            method: 'GET',
            url: `http://aathiagathiar.com/api/news/`,
            timeout: 60000
        }).then((res) => {
            resolve(res);
            console.log("success" ,res);
        }).catch((error) => {
            reject(error);
        });
    }));
}
